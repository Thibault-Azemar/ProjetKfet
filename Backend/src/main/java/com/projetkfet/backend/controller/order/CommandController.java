package com.projetkfet.backend.controller.order;

import com.projetkfet.backend.data.customer.CustomerRepository;
import com.projetkfet.backend.data.order.CommandRepository;
import com.projetkfet.backend.data.stock.ProductRepository;
import com.projetkfet.backend.dto.order.ProductCommandDTO;
import com.projetkfet.backend.model.customer.Customer;
import com.projetkfet.backend.model.order.Command;
import com.projetkfet.backend.model.order.ProductCommand;
import com.projetkfet.backend.model.stock.Product;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Controller
@RequestMapping(path="/command")
public class CommandController {

    private static final Logger logger = LogManager.getLogger("OrderLogger");

    @Autowired
    private CommandRepository commandRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private ProductRepository productRepository;

    //    GET

    @GetMapping(path="/all")
    public @ResponseBody
    Iterable<Command> getAllCommands() throws Exception {
        logger.info("All orders");
        return commandRepository.findAll();
    }

    //    POST

    @PostMapping(path="/add")
    public @ResponseBody
    UUID addNewCommand(@RequestParam(name="name", required = false) String name, @RequestParam(name="idcustomer", required = false) UUID idcustomer, @RequestParam(name="paymentMethod") String paymentMethod, @RequestParam(name="price") String price, @RequestParam(name="isPaid", required = false)  String isPaid, @RequestBody List<ProductCommandDTO> products) throws Exception {
        logger.info("Add new command");

        Command o = new Command();

        float priceOrder = Float.parseFloat(price);

        String nameAccount = "Commande sans nom";

//        On enlève le prix à l'utilisateur
        if (paymentMethod.equals("Account"))
        {
            Optional<Customer> customer = customerRepository.findById(idcustomer);
            if (customer.isPresent())
            {
                nameAccount = customer.get().getName() + " " + customer.get().getFirstname();

                // TODO : fixer selon la limite de crédit
                float customerMoney = customer.get().getMoney();
                if (customerMoney != 10000)
                {
                    customer.get().setMoney(customerMoney - priceOrder);
                    customerRepository.save(customer.get());
                }
                else
                {
                    logger.info("Not enough money");
                    throw new Exception("Not enough money");
                }
            }
            else
            {
                logger.info("No customer for this ID");
                throw new Exception("No customer for this ID");
            }
        }

        if (name != null && !name.isEmpty())
        {
            o.setName(name);
        }
        else
        {
            o.setName(nameAccount);
        }

//        On ajoute les produits à la commande
        List<ProductCommand> productCommands = new ArrayList<>();
        for (ProductCommandDTO p : products)
        {
            //        On supprime 1 du stock pour chaque produit
            Optional<Product> productStock = productRepository.findById(p.getId());
            // if n est non null
            if (productStock.isPresent()) {
                Product stock = productStock.get();

                Integer nbstock = stock.getStock();
                if (nbstock > 0)
                {
                    stock.setStock(nbstock - 1);
                    productRepository.save(stock);
                }
                else
                {
                    logger.info("Not enough stock product :" + stock.getId());
                    throw new Exception("Not enough stock product :" + stock.getId());
                }
            }
            else
            {
                logger.info("No product for this ID");
                throw new Exception("No product for this ID");
            }
            ProductCommand product = new ProductCommand(p.getId(), p.getName());
            productCommands.add(product);
        }
        o.setProducts(productCommands);

//        On ajoute les autres champs à la commande
        o.setPaymentMethod(paymentMethod);
        o.setPrice(priceOrder);
        o.setIsPaid(true);
        o.setState("Non commencée");

        o.setDate(new java.util.Date());

        commandRepository.save(o);
        logger.info("New command : " + o.getId());

        return o.getId();
    }

    //    UPDATE

    @PatchMapping()
    public @ResponseBody
    String UpdateStateCommand(@RequestParam("id") String id, @RequestParam("state") String state) throws Exception {
        logger.info("Update state order");
        Optional<Command> o = commandRepository.findById(UUID.fromString(id));

        if (o.isPresent())
        {
            o.get().setState(state);
            commandRepository.save(o.get());
            logger.info("Update state order : " + id);
            return "Confirm";
        }
        else
        {
            logger.info("No order for this ID");
            throw new Exception("No order for this ID");
        }

    }

    //    DELETE

    @DeleteMapping()
    public @ResponseBody
    String deleteCommand(@RequestParam("id") String id) throws Exception {
        logger.info("Delete Order");
        Optional<Command> o = commandRepository.findById(UUID.fromString(id));

        if (o.isPresent())
        {
            commandRepository.delete(o.get());
            logger.info("Offer Order : " + id);
            return "Confirm";
        }
        else
        {
            logger.info("No order for this ID");
            throw new Exception("No order for this ID");
        }

    }
}

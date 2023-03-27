package com.projetkfet.backend.controller.order;

import com.projetkfet.backend.data.order.CommandRepository;
import com.projetkfet.backend.dto.order.ProductCommandDTO;
import com.projetkfet.backend.model.order.Command;
import com.projetkfet.backend.model.order.ProductCommand;
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

    //    GET

    @GetMapping(path="/all")
    public @ResponseBody
    Iterable<Command> getAllOrders() throws Exception {
        logger.info("All orders");
        return commandRepository.findAll();
    }

    //    POST

    @PostMapping(path="/add")
    public @ResponseBody
    UUID addNewOrder(@RequestParam(name="name", required = false) String name, @RequestParam(name="paymentMethod") String paymentMethod, @RequestParam(name="price") String price, @RequestParam(name="isPaid")  String isPaid, @RequestBody List<ProductCommandDTO> products) throws Exception {
        logger.info("Add new order");

        Command o = new Command();

        List<ProductCommand> productCommands = new ArrayList<>();
        for (ProductCommandDTO p : products)
        {
            ProductCommand product = new ProductCommand(p.getId(), p.getName());
            productCommands.add(product);
        }
        o.setProducts(productCommands);

        if (name != null && !name.isEmpty())
        {
            o.setName(name);
        }
        o.setPaymentMethod(paymentMethod);
        o.setPrice(Float.parseFloat(price));
        o.setIsPaid(Boolean.parseBoolean(isPaid));

        o.setDate(new java.util.Date());

        commandRepository.save(o);
        logger.info("New order : " + o.getId());

        return o.getId();
    }

    //    UPDATE

    //    DELETE

    @DeleteMapping()
    public @ResponseBody
    String deleteOrder(@RequestParam("id") String id) throws Exception {
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

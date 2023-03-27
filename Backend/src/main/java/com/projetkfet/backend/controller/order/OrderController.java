package com.projetkfet.backend.controller.order;

import com.projetkfet.backend.data.order.CommandRepository;
import com.projetkfet.backend.model.order.Command;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@Controller
@RequestMapping(path="/order")
public class OrderController {

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
    UUID addNewOrder(@RequestParam(name="name", required = false) String name, @RequestParam(name="paymentMethod") String paymentMethod, @RequestParam(name="price") String price, @RequestParam(name="isPaid")  String isPaid) throws Exception {
        logger.info("Add new order");
        Command o = new Command();
        if (name != null && !name.isEmpty())
        {
            o.setName(name);
        }
        o.setPaymentMethod(paymentMethod);
        o.setPrice(Float.parseFloat(price));
        o.setIsPaid(isPaid);

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

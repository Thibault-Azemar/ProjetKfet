package com.projetkfet.backend.controller.order;

import com.projetkfet.backend.data.order.OrderRepository;
import com.projetkfet.backend.model.order.Order;
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
    private OrderRepository orderRepository;

    //    GET

    @GetMapping(path="/all")
    public @ResponseBody
    Iterable<Order> getAllOrders() throws Exception {
        logger.info("All orders");
        return orderRepository.findAll();
    }

    //    POST

    @PostMapping(path="/add")
    public @ResponseBody
    UUID addNewOrder() throws Exception {
        logger.info("New Order");

        UUID id = null;

        return id;
    }

    //    UPDATE

    //    DELETE

    @DeleteMapping()
    public @ResponseBody
    void deleteOrder(@RequestParam("id") String id) throws Exception {
        logger.info("Delete Order");
        Optional<Order> o = orderRepository.findById(UUID.fromString(id));

        if (o.isPresent())
        {
            orderRepository.delete(o.get());
            logger.info("Offer Order : " + id);
        }
        else
        {
            logger.info("No order for this ID");
            throw new Exception("No order for this ID");
        }

    }
}

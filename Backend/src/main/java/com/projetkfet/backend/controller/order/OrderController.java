package com.projetkfet.backend.controller.order;

import com.projetkfet.backend.data.order.OrderRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(path="/order")
public class OrderController {

    private static final Logger logger = LogManager.getLogger("OrderLogger");

    @Autowired
    private OrderRepository orderRepository;
}

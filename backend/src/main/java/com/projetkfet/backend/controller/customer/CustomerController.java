package com.projetkfet.backend.controller.customer;

import com.projetkfet.backend.data.customer.CustomerRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(path="/customer")
public class CustomerController {

    private static final Logger logger = LogManager.getLogger("CustomerLogger");

    @Autowired
    private CustomerRepository customerRepository;

}

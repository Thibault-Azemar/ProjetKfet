package com.projetkfet.backend.controller.customer;

import com.projetkfet.backend.data.customer.CustomerRepository;
import com.projetkfet.backend.data.customer.GroupRepository;
import com.projetkfet.backend.model.customer.Customer;
import com.projetkfet.backend.model.customer.Group;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@Controller
@RequestMapping(path="/customer")
public class CustomerController {

    private static final Logger logger = LogManager.getLogger("CustomerLogger");

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private GroupRepository groupRepository;


    //    GET

    @GetMapping(path="/all")
    public @ResponseBody
    Iterable<Customer> getAllCustomers() {
        logger.info("All customers");
        return customerRepository.findAll();
    }

    //    POST

    @PostMapping(path="/add")
    public @ResponseBody
    UUID addNewCustomer(@RequestParam("name") String name, @RequestParam("firstname") String firstname, @RequestParam("money") String money, @RequestParam("idgroup") String idgroup) throws Exception {
        logger.info("New Customer : " + name);

        UUID id = null;

        Optional<Group> gr = groupRepository.findById(UUID.fromString(idgroup));

        if (gr.isPresent())
        {
            Customer c = new Customer();

            c.setGroup(gr.get());
            c.setName(name);
            c.setFirstname(firstname);
            c.setMoney(Float.parseFloat(money));

            customerRepository.save(c);

            Optional<Customer> cus = customerRepository.findByName(name);

            if (cus.isPresent())
            {
                Customer customer = cus.get();
                id = customer.getId();
                logger.info("Id Customer : "+ id);
            }
            else
            {
                logger.info("Error create Customer");
                throw new Exception("Error create Customer");
            }
        }
        return id;
    }

    //    UPDATE

    @PatchMapping()
    public @ResponseBody
    void UpdateCustomer(@RequestParam("id") String id, @RequestParam(required = false, name = "name") String name, @RequestParam(required = false, name = "firstname") String firstname, @RequestParam(required = false, name = "money") String money, @RequestParam(required = false, name = "idgroup") String idgroup) throws Exception {
        logger.info("Update Group : " + id);

        Optional<Customer> c = customerRepository.findById(UUID.fromString(id));

        if (c.isPresent()) {
            Customer customer = c.get();

            if (name != null && !name.equals("")) {
                customer.setName(name);
            }
            if (firstname != null && !firstname.equals("")) {
                customer.setFirstname(name);
            }
            if (money != null && !money.equals("")) {
                float price = Float.parseFloat(money);
                customer.setMoney(price);
            }
            if (idgroup != null && !idgroup.equals("")) {
                Optional<Group> gr = groupRepository.findById(UUID.fromString(idgroup));
                if (gr.isPresent()) {
                    customer.setGroup(gr.get());
                }
                else {
                    logger.info("Error update Customer group");
                    throw new Exception("Error update Customer group");
                }
            }
            logger.info("Update Customer successful: " + id);

            customerRepository.save(customer);
        }
        else
        {
            logger.info("Error update Customer");
            throw new Exception("Error update Customer");
        }
    }

    //    DELETE

    @DeleteMapping()
    public @ResponseBody
    void deleteUser(@RequestParam("id") String id) throws Exception {
        logger.info("Delete Customer");
        Optional<Customer> c = customerRepository.findById(UUID.fromString(id));

        if (c.isPresent())
        {
            logger.info("Customer deleted : " + id);
            customerRepository.delete(c.get());
        }
        else
        {
            logger.info("No customer for this ID");
            throw new Exception("No customer for this ID");
        }

    }
}

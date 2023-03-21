package com.projetkfet.backend.controller.order;

import com.projetkfet.backend.data.order.ProductOrderRepository;
import com.projetkfet.backend.data.stock.ProductRepository;
import com.projetkfet.backend.model.order.ProductOrder;
import com.projetkfet.backend.model.stock.Product;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@Controller
@RequestMapping(path="/productorder")
public class ProductOrderController {

    private static final Logger logger = LogManager.getLogger("OrderLogger");

    @Autowired
    private ProductOrderRepository productOrderRepository;

    @Autowired
    private ProductRepository productRepository;

    //    GET

    @GetMapping(path="/all")
    public @ResponseBody
    Iterable<ProductOrder> getAllProductOrders() throws Exception {
        logger.info("All product orders");
        return productOrderRepository.findAll();
    }

    //    POST
    @PostMapping(path="/add")
    public @ResponseBody
    UUID addNewProductOrder(@RequestParam("idproduct") String idproduct, @RequestParam("state")String state) throws Exception {
        logger.info("New Product Order");

        UUID id = null;

        ProductOrder productOrder = new ProductOrder();

        Optional<Product> p = productRepository.findById(UUID.fromString(idproduct));
        if (p.isPresent())
        {
            productOrder.setProduct(p.get());
        }
        else
        {
            logger.info("Error create Product Order");
        }

        productOrder.setState(state);

        productOrderRepository.save(productOrder);

        return id;
    }

    //    UPDATE

    //    DELETE
    @DeleteMapping()
    public @ResponseBody
    String deleteProductOrder(@RequestParam("id") String id) throws Exception {
        logger.info("Delete Product Order");
        Optional<ProductOrder> o = productOrderRepository.findById(UUID.fromString(id));

        if (o.isPresent())
        {
            productOrderRepository.delete(o.get());
            logger.info("Offer Product Order : " + id);
            return "Confirm";
        }
        else
        {
            logger.info("Offer Product Order : " + id);
            return "Error";
        }
    }
}

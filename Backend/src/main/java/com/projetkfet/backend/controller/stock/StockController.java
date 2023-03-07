package com.projetkfet.backend.controller.stock;

import com.projetkfet.backend.data.stock.CategoryRepository;
import com.projetkfet.backend.data.stock.ProductRepository;
import com.projetkfet.backend.data.stock.SubCategoryRepository;
import com.projetkfet.backend.model.stock.Category;
import com.projetkfet.backend.model.stock.Product;
import com.projetkfet.backend.model.stock.SubCategory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@Controller
@CrossOrigin(origins = "http://127.0.0.1:8081")
@RequestMapping(path = "/stock")
public class StockController {

    private static final Logger logger = LogManager.getLogger("ProductLogger");

    @Autowired
    private SubCategoryRepository subCategoryRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ProductRepository productRepository;

    // GET

    // Récupère la liste du stock par Catégories
    @GetMapping(path = "/cat/all")
    public @ResponseBody Iterable<Category> getAllStockByCategories() {
        logger.info("All Stock by Category");
        return categoryRepository.findAll();
    }

    // Récupère la liste du stock par sous Catégories
    @GetMapping(path = "/subcat/all")
    public @ResponseBody Iterable<SubCategory> getAllStockBySubCategories() {
        logger.info("All Stock by SubCategory");
        return subCategoryRepository.findAll();
    }

    // POST

    // UPDATE

    // On enlève une valeur du stock d'un produit identifié par un produit
    @PatchMapping(path = "/product")
    public @ResponseBody String TakeOneProduct(@RequestParam("id") String id) throws Exception {
        logger.info("Take one product");

        Optional<Product> p = productRepository.findById(UUID.fromString(id));

        if (p.isPresent()) {
            Product product = p.get();

            Integer stock = product.getStock();

            if (stock > 0) {
                stock--;
                product.setStock(stock);
                productRepository.save(product);
                logger.info("Update stock for " + product.getName() + " : " + stock);
                return stock.toString();
            } else {
                logger.info("No more stock for " + product.getName() + " : " + product.getId());
                throw new Exception("No more stock for " + product.getName() + " : " + product.getId());
            }
        } else {
            logger.info("Product doesn't exist");
            throw new Exception("Product doesn't exist");
        }
    }

    // DELETE

}

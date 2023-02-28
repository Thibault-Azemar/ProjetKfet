package com.projetkfet.backend.controller.stock;

import com.projetkfet.backend.data.stock.ProductRepository;
import com.projetkfet.backend.data.stock.SubCategoryRepository;
import com.projetkfet.backend.model.stock.Product;
import com.projetkfet.backend.model.stock.SubCategory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping(path="/product")
public class ProductController {

    private static final Logger logger = LogManager.getLogger("ProductLogger");

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private SubCategoryRepository subCategoryRepository;

//    GET

    @GetMapping(path="/all")
    public @ResponseBody
    Iterable<Product> getAllProducts()
    {
        logger.info("All Products");
        return productRepository.findAll();
    }

//    POST

//    Permet d'ajouter une nouvelle catégorie
    @PostMapping(path="/add")
    public @ResponseBody
    String addNewProduct (@RequestParam("name") String name, @RequestParam(required = false, name = "purchasePrice") float purchasePrice, @RequestParam(required = false, name = "sellingPrice") float sellingPrice, @RequestParam(required = false, name = "sellingPriceMembers") float sellingPriceMembers, @RequestParam("idSubCategory") Integer id)
    {
        logger.info("New Product");

        Optional<SubCategory> subCat = subCategoryRepository.findById(id);

        if (subCat.isPresent())
        {
            Product p = new Product();
            p.setName(name);
            p.setPurchasePrice(purchasePrice);
            p.setSellingPrice(sellingPrice);
            p.setSellingPriceMembers(sellingPriceMembers);
            p.setStock(0);
            p.setSubCategorie(subCat.get());
            productRepository.save(p);
        }

        return "Saved";
    }

//    UPDATE

//    DELETE
}

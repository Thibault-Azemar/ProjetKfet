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
import java.util.UUID;

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

    @GetMapping()
    public @ResponseBody Product getProduct(@RequestParam("id") String id)
    {
        logger.info("Get product");

        Optional<Product> p = productRepository.findById(UUID.fromString(id));

        Product product = null;
        // if n est non null
        if (p.isPresent()) {
            product = p.get();
        }
        return product;
    }

//    POST

//    Permet d'ajouter une nouvelle catégorie
    @PostMapping(path="/add")
    public @ResponseBody
    String addNewProduct (@RequestParam("name") String name, @RequestParam(required = false, name = "purchasePrice") float purchasePrice, @RequestParam(required = false, name = "sellingPrice") float sellingPrice, @RequestParam(required = false, name = "sellingPriceMembers") float sellingPriceMembers, @RequestParam(required = false, name = "image") String image , @RequestParam("idSubCategory") String id)
    {
        logger.info("New Product");

        Optional<SubCategory> subCat = subCategoryRepository.findById(UUID.fromString(id));

        if (subCat.isPresent())
        {
//            TODO: gérer les champs non obligatoires / Gérer les champs floats non nulls
            Product p = new Product();
            p.setName(name);
            p.setStock(0);
            p.setSubCategorie(subCat.get());

            if (purchasePrice > 0) {
                p.setPurchasePrice(purchasePrice);
            }
            if (sellingPrice > 0) {
                p.setSellingPrice(sellingPrice);
            }
            if (sellingPriceMembers > 0) {
                p.setSellingPriceMembers(sellingPriceMembers);
            }
            if (image != null && !image.equals("")) {
                p.setImage(image);
            }
            productRepository.save(p);
        }

        return "Saved";
    }

//    UPDATE
    @PatchMapping()
    public @ResponseBody
    void UpdateProduct(@RequestParam("id") String id, @RequestParam(required = false, name = "name") String name, @RequestParam(required = false, name = "purchasePrice") float purchasePrice, @RequestParam(required = false, name = "sellingPrice") float sellingPrice, @RequestParam(required = false, name = "sellingPriceMembers") float sellingPriceMembers, @RequestParam(required = false, name = "stock") Integer stock, @RequestParam(required = false, name = "image") String image)
    {
        logger.info("Update Product");

        Optional<Product> p = productRepository.findById(UUID.fromString(id));

        if (p.isPresent()) {
            Product product = p.get();

            if (name != null && !name.equals("")) {
                product.setName(name);
            }
            if (purchasePrice > 0) {
                product.setPurchasePrice(purchasePrice);
            }
            if (sellingPrice > 0) {
                product.setSellingPrice(sellingPrice);
            }
            if (sellingPriceMembers > 0) {
                product.setSellingPriceMembers(sellingPriceMembers);
            }
            if (stock > 0) {
                product.setStock(stock);
            }
            if (image != null && !image.equals("")) {
                product.setImage(image);
            }

            productRepository.save(product);
        }
    }

//    DELETE
}

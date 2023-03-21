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
@CrossOrigin(origins = "*")
@RequestMapping(path = "/product")
public class ProductController {

    private static final Logger logger = LogManager.getLogger("ProductLogger");

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private SubCategoryRepository subCategoryRepository;

    // GET

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Product> getAllProducts() {
        logger.info("All Products");
        return productRepository.findAll();
    }

    @GetMapping()
    public @ResponseBody Product getProduct(@RequestParam("id") String id) throws Exception {
        logger.info("Get product");

        Optional<Product> p = productRepository.findById(UUID.fromString(id));

        Product product = null;
        // if n est non null
        if (p.isPresent()) {
            product = p.get();
        } else {
            logger.info("Product doesn't exist");
            throw new Exception("Product doesn't exist");
        }
        return product;
    }

    // POST

    // Permet d'ajouter une nouvelle catégorie
    @PostMapping(path = "/add")
    public @ResponseBody UUID addNewProduct(@RequestParam("name") String name,
            @RequestParam(required = false, name = "purchasePrice") String purchasePrice,
            @RequestParam(required = false, name = "sellingPrice") String sellingPrice,
            @RequestParam(required = false, name = "sellingPriceMembers") String sellingPriceMembers,
            @RequestParam(required = false, name = "image") String image, @RequestParam("idSubCategory") String id)
            throws Exception {
        logger.info("New Product");

        UUID idproduct = null;

        Optional<SubCategory> subCat = subCategoryRepository.findById(UUID.fromString(id));

        if (subCat.isPresent()) {
            Product p = new Product();
            p.setName(name);
            p.setStock(0);
            p.setSubCategorie(subCat.get());

            if (purchasePrice != null && !purchasePrice.equals("")) {
                float price = Float.parseFloat(purchasePrice);
                p.setPurchasePrice(price);
            }
            if (sellingPrice != null && !sellingPrice.equals("")) {
                float price = Float.parseFloat(sellingPrice);
                p.setSellingPrice(price);
            }
            if (sellingPriceMembers != null && !sellingPriceMembers.equals("")) {
                float price = Float.parseFloat(sellingPriceMembers);
                p.setSellingPriceMembers(price);
            }
            if (image != null && !image.equals("")) {
                p.setImage(image);
            }
            productRepository.save(p);

            Optional<Product> product = productRepository.findByName(name);

            if (product.isPresent()) {
                Product prod = product.get();
                idproduct = prod.getId();
                logger.info("Id category : " + idproduct);
            } else {
                logger.info("Error create Product");
                throw new Exception("Error create Product");
            }
        } else {
            logger.info("Error id SubCategory");
            throw new Exception("Error id SubCategory");
        }
        return idproduct;
    }

    // UPDATE
    @PatchMapping()
    public @ResponseBody String UpdateProduct(@RequestParam("id") String id,
            @RequestParam(required = false, name = "name") String name,
            @RequestParam(required = false, name = "purchasePrice") String purchasePrice,
            @RequestParam(required = false, name = "sellingPrice") String sellingPrice,
            @RequestParam(required = false, name = "sellingPriceMembers") String sellingPriceMembers,
            @RequestParam(required = false, name = "stock") String stock,
            @RequestParam(required = false, name = "image") String image,
            @RequestParam(required = false, name = "idsubcat") String idsubcat) throws Exception {
        logger.info("Update Product : " + id);

        Optional<Product> p = productRepository.findById(UUID.fromString(id));

        if (p.isPresent()) {
            Product product = p.get();

            if (name != null && !name.equals("")) {
                product.setName(name);
            }
            if (purchasePrice != null && !purchasePrice.equals("")) {
                float price = Float.parseFloat(purchasePrice);
                product.setPurchasePrice(price);
            }
            if (sellingPrice != null && !sellingPrice.equals("")) {
                float price = Float.parseFloat(sellingPrice);
                product.setSellingPrice(price);
            }
            if (sellingPriceMembers != null && !sellingPriceMembers.equals("")) {
                float price = Float.parseFloat(sellingPriceMembers);
                product.setSellingPriceMembers(price);
            }
            if (stock != null && !stock.equals("")) {
                Integer amount = Integer.parseInt(stock);
                product.setStock(amount);
            }
            if (image != null && !image.equals("")) {
                product.setImage(image);
            }
            if (idsubcat != null && !idsubcat.equals("")) {
                Optional<SubCategory> subCat = subCategoryRepository.findById(UUID.fromString(idsubcat));

                if (subCat.isPresent()) {
                    product.setSubCategorie(subCat.get());
                } else {
                    logger.info("Error update Product Subcategory");
                    throw new Exception("Error update Product Subcategory");
                }
            }
            logger.info("Update Product successful: " + id);

            productRepository.save(product);
            return "Confirm";
        } else {
            logger.info("Error update Product");
            throw new Exception("Error update Product");
        }

    }

    // DELETE

    @DeleteMapping()
    public @ResponseBody String deleteProduct(@RequestParam("id") String id) throws Exception {
        logger.info("Delete User");
        Optional<Product> p = productRepository.findById(UUID.fromString(id));

        if (p.isPresent()) {
            logger.info("Product deleted : " + id);
            productRepository.delete(p.get());
            return "Confirm";
        } else {
            logger.info("No product for this ID");
            throw new Exception("No product for this ID");
        }

    }
}

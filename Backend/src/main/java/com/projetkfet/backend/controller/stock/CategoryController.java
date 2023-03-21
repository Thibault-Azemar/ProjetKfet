package com.projetkfet.backend.controller.stock;

import com.projetkfet.backend.data.stock.CategoryRepository;
import com.projetkfet.backend.projection.stock.CategoryProjection;
import com.projetkfet.backend.model.stock.Category;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Controller
@RequestMapping(path="/category")
public class CategoryController {

    private static final Logger logger = LogManager.getLogger("ProductLogger");

    @Autowired
    private CategoryRepository categoryRepository;

//    GET

//    Retourne la liste de toutes les catégories
    @GetMapping(path="/all")
    public @ResponseBody
    List<CategoryProjection> getAllCategories() throws Exception {
        return categoryRepository.findAllProjectedBy();
    }

//    POST

//    Permet d'ajouter une nouvelle catégorie
    @PostMapping(path="/add")
    public @ResponseBody
    UUID addNewCategory (@RequestParam("name") String name, @RequestParam(required = false, name = "image") String image) throws Exception {
        logger.info("New Categorie : " + name);

        UUID id = null;

        Category c = new Category();
        c.setName(name);
        if (image != null && !image.equals("")) {
            c.setImage(image);
        }
        categoryRepository.save(c);

        Optional<Category> cat = categoryRepository.findByName(name);

        if (cat.isPresent())
        {
            Category category = cat.get();
            id = category.getId();
            logger.info("Id category : "+ id);
        }
        else
        {
            logger.info("Error create Category");
            throw new Exception("Error create Category");
        }

        return id;
    }

//    UPDATE

//    DELETE

    @DeleteMapping()
    public @ResponseBody
    String deleteCategory(@RequestParam("id") String id) throws Exception {
        logger.info("Delete User");
        Optional<Category> c = categoryRepository.findById(UUID.fromString(id));

        if (c.isPresent())
        {
            logger.info("Category deleted : " + id);
            categoryRepository.delete(c.get());
            return "Confirm";
        }
        else
        {
            logger.info("No category for this ID");
            throw new Exception("No category for this ID");
        }

    }
}

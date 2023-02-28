package com.projetkfet.backend.controller.stock;

import com.projetkfet.backend.data.stock.CategoryRepository;
import com.projetkfet.backend.model.stock.Category;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/category")
public class CategoryController {

    private static final Logger logger = LogManager.getLogger("ProductLogger");

    @Autowired
    private CategoryRepository categoryRepository;

//    GET

//    Retourne la liste de tous les utilisateurs
    @GetMapping(path="/all")
    public @ResponseBody
    Iterable<Category> getAllCategories()
    {
        logger.info("All Category");
        return categoryRepository.findAll();
    }

//    POST

//    Permet d'ajouter une nouvelle catégorie
    @PostMapping(path="/add")
    public @ResponseBody
    String addNewCategory (@RequestParam("name") String name)
    {
        logger.info("New Categorie");

        Category c = new Category();
        c.setName(name);
        categoryRepository.save(c);

        return "Saved";
    }

//    UPDATE

//    DELETE
}

package com.projetkfet.backend.controller.stock;

import com.projetkfet.backend.data.stock.CategoryRepository;
import com.projetkfet.backend.data.stock.SubCategoryRepository;
import com.projetkfet.backend.model.stock.Category;
import com.projetkfet.backend.model.stock.SubCategory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping(path="/subcategory")
public class SubCategoryController {

    private static final Logger logger = LogManager.getLogger("ProductLogger");

    @Autowired
    private SubCategoryRepository subCategoryRepository;

    @Autowired
    private CategoryRepository categoryRepository;

//    GET

//    Récupère la liste des sous Catégories
    @GetMapping(path="/all")
    public @ResponseBody String getAllSubCategories()
    {
        return "Nope";
    }

//    POST

//    Permet d'ajouter une nouvelle catégorie
    @PostMapping(path="/add")
    public @ResponseBody
    String addNewSubCategory (@RequestParam("name") String name, @RequestParam("idCategory") Integer id)
    {
        logger.info("New SubCategorie");

        Optional<Category> cat = categoryRepository.findById(id);

        if (cat.isPresent())
        {
            SubCategory c = new SubCategory();
            c.setName(name);
            c.setCategory(cat.get());
            subCategoryRepository.save(c);
            return "Saved";
        }
        return "UnSaved";
    }

//    UPDATE

//    DELETE
}

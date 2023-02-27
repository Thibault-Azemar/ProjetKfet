package com.projetkfet.backend.controller.stock;

import com.projetkfet.backend.data.stock.SubCategoryRepository;
import com.projetkfet.backend.model.stock.SubCategory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/subcategory")
public class SubCategoryController {

    private static final Logger logger = LogManager.getLogger("ProductLogger");

    @Autowired
    private SubCategoryRepository subCategoryRepository;

//    GET

//    Récupère la liste des sous Catégories
    @GetMapping(path="/all")
    public @ResponseBody Iterable<SubCategory> getAllSubCategories()
    {
        logger.info("All Category");
        return subCategoryRepository.findAll();
    }

//    POST

//    Permet d'ajouter une nouvelle catégorie
    @PostMapping(path="/add")
    public @ResponseBody
    String addNewSubCategory (@RequestParam("name") String name)
    {
        logger.info("New SubCategorie");

        SubCategory c = new SubCategory();
        c.setName(name);
        subCategoryRepository.save(c);

        return "Saved";
    }

//    UPDATE

//    DELETE
}

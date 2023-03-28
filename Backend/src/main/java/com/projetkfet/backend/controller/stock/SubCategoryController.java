package com.projetkfet.backend.controller.stock;

import com.projetkfet.backend.data.stock.CategoryRepository;
import com.projetkfet.backend.data.stock.SubCategoryRepository;
import com.projetkfet.backend.projection.stock.SubCategoryProjection;
import com.projetkfet.backend.model.stock.Category;
import com.projetkfet.backend.model.stock.SubCategory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Controller
@CrossOrigin(origins = "*")
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
    public @ResponseBody
    List<SubCategoryProjection> getAllSubCategories() throws Exception {
        return subCategoryRepository.findAllProjectedBy();
    }

    // Récupère une sous catégorie
    @GetMapping()
    public @ResponseBody SubCategory getSubCategory(@RequestParam("id") String id) throws Exception {
        logger.info("Get subcategory");

        Optional<SubCategory> sc = subCategoryRepository.findById(UUID.fromString(id));

        SubCategory subcategory = null;
        // if n est non null
        if (sc.isPresent()) {
            subcategory = sc.get();
        }
        else
        {
            logger.info("SubCategory doesn't exist");
            throw new Exception("SubCategory doesn't exist");
        }
        return subcategory;
    }

//    POST

//    Permet d'ajouter une nouvelle catégorie
    @PostMapping(path="/add")
    public @ResponseBody
    UUID addNewSubCategory (@RequestParam("name") String name, @RequestParam(required = false, name = "image") String image, @RequestParam("idCategory") String id) throws Exception {
        logger.info("New SubCategorie : "+ name);

        UUID idsubcat = null;

        Optional<Category> cat = categoryRepository.findById(UUID.fromString(id));

        if (cat.isPresent())
        {
            SubCategory c = new SubCategory();
            c.setName(name);
            if (image != null && !image.equals("")) {
                c.setImage(image);
            }
            c.setCategory(cat.get());
            subCategoryRepository.save(c);

            Optional<SubCategory> sc = subCategoryRepository.findByName(name);

            if (sc.isPresent())
            {
                SubCategory subcategory = sc.get();
                idsubcat = subcategory.getId();
                logger.info("Id subcategory : "+ idsubcat);
            }
            else
            {
                logger.info("Error create SubCategory");
                throw new Exception("Error create SubCategory");
            }

            return idsubcat;
        }
        logger.info("Error id Category");
        throw new Exception("Error id Category");
    }

//    UPDATE

//    DELETE

    @DeleteMapping()
    public @ResponseBody
    String deleteSubCategory(@RequestParam("id") String id) throws Exception {
        logger.info("Delete User");
        Optional<SubCategory> sc = subCategoryRepository.findById(UUID.fromString(id));

        if (sc.isPresent())
        {
            logger.info("SubCategory deleted : " + id);
            subCategoryRepository.delete(sc.get());
            return "Confirm";
        }
        else
        {
            logger.info("No subcategory for this ID");
            throw new Exception("No subcategory for this ID");
        }

    }

}

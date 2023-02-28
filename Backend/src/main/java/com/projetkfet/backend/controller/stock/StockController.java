package com.projetkfet.backend.controller.stock;

import com.projetkfet.backend.data.stock.CategoryRepository;
import com.projetkfet.backend.data.stock.ProductRepository;
import com.projetkfet.backend.data.stock.SubCategoryRepository;
import com.projetkfet.backend.model.stock.Category;
import com.projetkfet.backend.model.stock.SubCategory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/stock")
public class StockController {

    private static final Logger logger = LogManager.getLogger("ProductLogger");

    @Autowired
    private SubCategoryRepository subCategoryRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ProductRepository productRepository;


    //    GET

    //    Récupère la liste du stock par Catégories
    @GetMapping(path="/cat/all")
    public @ResponseBody
    Iterable<Category> getAllCategories()
    {
        logger.info("All Stock by Category");
        return categoryRepository.findAll();
    }

    //    Récupère la liste du stock par sous Catégories
    @GetMapping(path="/subcat/all")
    public @ResponseBody
    Iterable<SubCategory> getAllStockBySubCategories()
    {
        logger.info("All Stock by SubCategory");
        return subCategoryRepository.findAll();
    }

    //    POST

    //    UPDATE

    //    DELETE


}

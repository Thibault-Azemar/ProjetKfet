package com.projetkfet.backend.data.stock;

import com.projetkfet.backend.model.stock.Category;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CategoryRepository extends CrudRepository<Category, Integer> {

    @Query("SELECT subCategory.name FROM Category category JOIN category.items subCategory WHERE category = :category")
    List<String> getSubCategoryNamesByCategory(@Param("category") Category category);

}
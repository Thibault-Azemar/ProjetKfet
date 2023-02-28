package com.projetkfet.backend.data.stock;

import com.projetkfet.backend.model.stock.SubCategory;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SubCategoryRepository extends CrudRepository<SubCategory, Integer> {
    @Query("SELECT product.name FROM SubCategory subCategory JOIN subCategory.products product WHERE subCategory = :subCategory")
    List<String> getProductsNamesBySubCategory(@Param("subCategory") SubCategory subCategory);

}
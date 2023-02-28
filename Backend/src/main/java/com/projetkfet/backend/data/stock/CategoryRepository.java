package com.projetkfet.backend.data.stock;

import com.projetkfet.backend.model.stock.Category;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<Category, Integer> {


}
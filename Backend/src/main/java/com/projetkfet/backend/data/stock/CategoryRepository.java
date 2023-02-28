package com.projetkfet.backend.data.stock;

import com.projetkfet.backend.model.stock.Category;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;
import java.util.UUID;

public interface CategoryRepository extends CrudRepository<Category, Integer> {

    Optional<Category> findById(UUID id);
}
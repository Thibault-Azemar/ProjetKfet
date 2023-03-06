package com.projetkfet.backend.data.stock;

import com.projetkfet.backend.model.stock.Product;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;
import java.util.UUID;

public interface ProductRepository extends CrudRepository<Product, Integer> {

    Optional<Product> findById(UUID fromString);
}
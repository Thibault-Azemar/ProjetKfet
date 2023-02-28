package com.projetkfet.backend.data.stock;

import com.projetkfet.backend.model.stock.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Integer> {

}
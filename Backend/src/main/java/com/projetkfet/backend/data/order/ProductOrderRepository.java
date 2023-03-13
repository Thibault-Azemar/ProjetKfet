package com.projetkfet.backend.data.order;

import com.projetkfet.backend.model.order.ProductOrder;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;
import java.util.UUID;

public interface ProductOrderRepository extends CrudRepository<ProductOrder, UUID> {

    Optional<ProductOrder> findById(UUID id);
}
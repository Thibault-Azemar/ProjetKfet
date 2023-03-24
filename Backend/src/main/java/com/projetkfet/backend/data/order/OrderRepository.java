package com.projetkfet.backend.data.order;

import com.projetkfet.backend.model.order.Order;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;
import java.util.UUID;

public interface OrderRepository extends CrudRepository<Order, UUID> {

    Optional<Order> findById(UUID id);
}
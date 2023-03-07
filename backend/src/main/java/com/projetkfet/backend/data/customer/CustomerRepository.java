package com.projetkfet.backend.data.customer;

import com.projetkfet.backend.model.customer.Customer;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;
import java.util.UUID;

public interface CustomerRepository extends CrudRepository<Customer, UUID> {

    Optional<Customer> findById(UUID id);
}
package com.projetkfet.backend.data.customer;

import com.projetkfet.backend.model.customer.Group;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;
import java.util.UUID;

public interface GroupRepository extends CrudRepository<Group, UUID> {

    Optional<Group> findById(UUID id);

    Optional<Group> findByName(String name);
}
package com.projetkfet.backend.data.order;

import com.projetkfet.backend.model.order.Command;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;
import java.util.UUID;

public interface CommandRepository extends CrudRepository<Command, UUID> {

    Optional<Command> findById(UUID id);
}
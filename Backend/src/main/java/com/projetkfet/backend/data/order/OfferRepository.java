package com.projetkfet.backend.data.order;

import com.projetkfet.backend.model.order.Offer;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;
import java.util.UUID;

public interface OfferRepository extends CrudRepository<Offer, UUID> {

    Optional<Offer> findById(UUID id);
}
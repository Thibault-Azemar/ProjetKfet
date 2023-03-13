package com.projetkfet.backend.model.order;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Entity
public class Order {
    @Id
    @GeneratedValue
    @UuidGenerator
    private UUID id;
}

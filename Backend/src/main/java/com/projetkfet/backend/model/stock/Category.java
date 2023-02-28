package com.projetkfet.backend.model.stock;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import org.hibernate.annotations.UuidGenerator;

import java.util.Set;
import java.util.UUID;

@Entity
public class Category {
    @Id
    @GeneratedValue
    @UuidGenerator
    private UUID id;
//  Nom de la catégorie
    private String name;

    @OneToMany(mappedBy="category")
    @JsonIgnoreProperties("category")
    private Set<SubCategory> subCategories;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<SubCategory> getSubCategories() {
        return subCategories;
    }

    public void setSubCategories(Set<SubCategory> subCategories) {
        this.subCategories = subCategories;
    }
}

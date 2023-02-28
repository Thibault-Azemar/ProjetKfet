package com.projetkfet.backend.model.stock;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import org.hibernate.annotations.UuidGenerator;

import java.util.Set;
import java.util.UUID;

@Entity
public class SubCategory {
    @Id
    @GeneratedValue
    @UuidGenerator
    private UUID id;
    //  Nom de la sous catégorie
    private String name;

    @OneToMany(mappedBy="subCategorie")
    @JsonIgnoreProperties("subCategorie")
    private Set<Product> products;

    @ManyToOne
    @JsonIgnoreProperties("subCategories")
    private Category category;

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

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Set<Product> getProducts() {
        return products;
    }

    public void setProducts(Set<Product> products) {
        this.products = products;
    }
}

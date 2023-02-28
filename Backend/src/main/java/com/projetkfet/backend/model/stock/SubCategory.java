package com.projetkfet.backend.model.stock;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.Set;

@Entity
public class SubCategory {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    //  Nom de la sous catégorie
    private String name;

    @OneToMany(mappedBy="subCategorie")
    @JsonIgnoreProperties("subCategorie")
    private Set<Product> products;

    @ManyToOne
    @JsonIgnoreProperties("subCategories")
    private Category category;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
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

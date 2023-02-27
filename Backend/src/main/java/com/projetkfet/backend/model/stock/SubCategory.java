package com.projetkfet.backend.model.stock;

import jakarta.persistence.*;

import java.util.Set;

@Entity
public class SubCategory {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    //  Nom de la sous catégorie
    private String name;

    @ManyToOne
    @JoinColumn(name="cat_id", nullable=false)
    private Category category;

    @OneToMany(mappedBy="subCategorie")
    private Set<Product> items;

    public SubCategory(Integer id, String name, Category category, Set<Product> items) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.items = items;
    }

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

    public Set<Product> getItems() {
        return items;
    }

    public void setItems(Set<Product> items) {
        this.items = items;
    }
}

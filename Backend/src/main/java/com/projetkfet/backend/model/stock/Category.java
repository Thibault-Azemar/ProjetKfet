package com.projetkfet.backend.model.stock;

import jakarta.persistence.*;

import java.util.Set;

@Entity
public class Category {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
//  Nom de la catégorie
    private String name;

    @OneToMany(mappedBy="category")
    private Set<SubCategory> items;


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

    public Set<SubCategory> getItems() {
        return items;
    }

    public void setItems(Set<SubCategory> items) {
        this.items = items;
    }
}

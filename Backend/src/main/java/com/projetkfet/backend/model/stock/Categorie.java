package com.projetkfet.backend.model.stock;

import jakarta.persistence.*;

import java.util.Set;

@Entity
public class Categorie {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
//  Nom de la catégorie
    private String name;

    @OneToMany(mappedBy="categorie")
    private Set<SousCategorie> items;

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

    public Set<SousCategorie> getItems() {
        return items;
    }

    public void setItems(Set<SousCategorie> items) {
        this.items = items;
    }
}

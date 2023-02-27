package com.projetkfet.backend.model.stock;

import jakarta.persistence.*;

import java.util.Set;

@Entity
public class SousCategorie {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;
    //  Nom de la sous catégorie
    private String name;

    @ManyToOne
    @JoinColumn(name="cat_id", nullable=false)
    private Categorie categorie;

    @OneToMany(mappedBy="ssCategorie")
    private Set<Produit> items;

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

    public Categorie getCategorie() {
        return categorie;
    }

    public void setCategorie(Categorie categorie) {
        this.categorie = categorie;
    }

    public Set<Produit> getItems() {
        return items;
    }

    public void setItems(Set<Produit> items) {
        this.items = items;
    }
}

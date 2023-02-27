package com.projetkfet.backend.model.vendable;

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

    @OneToMany(mappedBy="sscategorie")
    private Set<Produit> items;
}

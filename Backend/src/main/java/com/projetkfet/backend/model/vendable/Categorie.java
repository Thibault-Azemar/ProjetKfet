package com.projetkfet.backend.model.vendable;

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
}

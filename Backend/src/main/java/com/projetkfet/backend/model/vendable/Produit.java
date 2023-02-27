package com.projetkfet.backend.model.vendable;

import jakarta.persistence.*;

@Entity
public class Produit {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    @JoinColumn(name="sscat_id", nullable=false)
    private SousCategorie sscategorie;
//  Nom du produit
    private String name;

    


}

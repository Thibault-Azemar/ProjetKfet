package com.projetkfet.backend.model.stock;

import jakarta.persistence.*;

@Entity
public class Produit {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    @JoinColumn(name="sscat_id", nullable=false)
    private SousCategorie ssCategorie;
//  Nom du produit
    private String name;
//  Prix de vente
    private float sellingPrice;
//  Prix de vente pour les membres
    private float sellingPriceMembers;
//  Prix d'achat'
    private float purchasePrice;
//  Stock de l'item
    private Integer stock;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public SousCategorie getSsCategorie() {
        return ssCategorie;
    }

    public void setSsCategorie(SousCategorie ssCategorie) {
        this.ssCategorie = ssCategorie;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getSellingPrice() {
        return sellingPrice;
    }

    public void setSellingPrice(float sellingPrice) {
        this.sellingPrice = sellingPrice;
    }

    public float getSellingPriceMembers() {
        return sellingPriceMembers;
    }

    public void setSellingPriceMembers(float sellingPriceMembers) {
        this.sellingPriceMembers = sellingPriceMembers;
    }

    public float getPurchasePrice() {
        return purchasePrice;
    }

    public void setPurchasePrice(float purchasePrice) {
        this.purchasePrice = purchasePrice;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }
}

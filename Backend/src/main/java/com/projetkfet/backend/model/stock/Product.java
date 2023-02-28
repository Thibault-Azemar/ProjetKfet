package com.projetkfet.backend.model.stock;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    @ManyToOne
    @JsonIgnoreProperties("products")
    private SubCategory subCategorie;
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

    public SubCategory getSubCategorie() {
        return subCategorie;
    }

    public void setSubCategorie(SubCategory subCategorie) {
        this.subCategorie = subCategorie;
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

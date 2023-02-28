package com.projetkfet.backend.model.stock;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Entity
public class Product {
    @Id
    @GeneratedValue
    @UuidGenerator
    private UUID id;

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
//  Image du produit
    private String image;
//  Stock de l'item
    private Integer stock;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }
}

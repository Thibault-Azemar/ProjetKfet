package com.projetkfet.backend.model.order;

import jakarta.persistence.*;
import org.hibernate.annotations.UuidGenerator;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
public class Offer {
    @Id
    @GeneratedValue
    @UuidGenerator
    private UUID id;

    private String name;

    private float price;

    private float priceMembers;

    private Integer nbproducts;

    @ElementCollection
    @CollectionTable(name = "offer_product")
    private List<UUID> productIds = new ArrayList<>();

    @ElementCollection
    @CollectionTable(name = "offer_subcat")
    private List<UUID> subcatIds = new ArrayList<>();

    @ElementCollection
    @CollectionTable(name = "offer_cat")
    private List<UUID> catIds = new ArrayList<>();

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public float getPriceMembers() {
        return priceMembers;
    }

    public void setPriceMembers(float priceMembers) {
        this.priceMembers = priceMembers;
    }

    public Integer getNbproducts() {
        return nbproducts;
    }

    public void setNbproducts(Integer nbproducts) {
        this.nbproducts = nbproducts;
    }

    public List<UUID> getProductIds() {
        return productIds;
    }

    public void addProductId(UUID productId) {
        this.productIds.add(productId);
    }

    public void removeProductId(UUID productId) {
        this.productIds.remove(productId);
    }

    public void setProductIds(List<UUID> productIds) {
        this.productIds = productIds;
    }

    public List<UUID> getSubcatIds() {
        return subcatIds;
    }

    public void addSubcatId(UUID productId) {
        this.subcatIds.add(productId);
    }

    public void removeSubcatId(UUID productId) {
        this.subcatIds.remove(productId);
    }

    public void setSubcatIds(List<UUID> subcatIds) {
        this.subcatIds = subcatIds;
    }

    public List<UUID> getCatIds() {
        return catIds;
    }

    public void addCatId(UUID productId) {
        this.catIds.add(productId);
    }

    public void removeCatId(UUID productId) {
        this.catIds.remove(productId);
    }

    public void setCatIds(List<UUID> catIds) {
        this.catIds = catIds;
    }
}

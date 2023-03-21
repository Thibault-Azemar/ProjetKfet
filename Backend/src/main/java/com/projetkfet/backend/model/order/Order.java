package com.projetkfet.backend.model.order;

import jakarta.persistence.*;
import org.hibernate.annotations.UuidGenerator;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Entity
public class Order {
    @Id
    @GeneratedValue
    @UuidGenerator
    private UUID id;

//    Nom du client
    private String name;

    private float price;

    private Boolean isPaid;

    private String state;

    private Date date;

//    Liste de productOrder
    @OneToMany
    private List<ProductOrder> products;

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

    public Boolean getIsPaid() {
        return isPaid;
    }

    public void setIsPaid(Boolean isPaid) {
        this.isPaid = isPaid;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public List<ProductOrder> getProducts() {
        return products;
    }

    public void setProducts(List<ProductOrder> products) {
        this.products = products;
    }

}

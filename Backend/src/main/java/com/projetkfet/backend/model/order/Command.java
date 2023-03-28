package com.projetkfet.backend.model.order;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import org.hibernate.annotations.UuidGenerator;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Entity
public class Command {
    @Id
    @GeneratedValue
    @UuidGenerator
    private UUID id;

//    Nom du client
    private String name;

//    Mode de paiement
    private String paymentMethod;

//    Prix total
    private float price;

//    Est payé
    private Boolean isPaid;

//    Etat de la commande
    private String state;

//    Date de la commande
    private Date date;

    @ElementCollection
    private List<ProductCommand> products;

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

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
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

    public List<ProductCommand> getProducts() {
        return products;
    }

    public void setProducts(List<ProductCommand> products) {
        this.products = products;
    }
}

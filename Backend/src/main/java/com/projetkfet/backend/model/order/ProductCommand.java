package com.projetkfet.backend.model.order;

import jakarta.persistence.Embeddable;
import jakarta.persistence.GeneratedValue;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Embeddable
public class ProductCommand {

    // IdProductInList
    @GeneratedValue
    @UuidGenerator
    private UUID id;
//    Id du produit
    private UUID productId;
//    Etat du produit dans la commande
    private String state;
//    Nom du produit
    private String product;

    public ProductCommand(UUID productId, String name) {
        this.id = UUID.randomUUID();
        this.product = name;
        this.state = "En attente";
        this.productId = productId;
    }

    public ProductCommand() {

    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public UUID getProductId() {
        return productId;
    }

    public void setProductId(UUID productId) {
        this.productId = productId;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }
}

package com.projetkfet.backend.model.order;

import jakarta.persistence.Embeddable;
import jakarta.persistence.GeneratedValue;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Embeddable
public class ProductCommand {

    @GeneratedValue
    @UuidGenerator
    private UUID idProductInList;

    private UUID productId;

    private String state;

    private String product;

    public ProductCommand(UUID productId, String name) {
        this.idProductInList = UUID.randomUUID();
        this.product = name;
        this.state = "En attente";
        this.productId = productId;
    }

    public ProductCommand() {

    }

    public UUID getId() {
        return idProductInList;
    }

    public void setId(UUID id) {
        this.idProductInList = id;
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

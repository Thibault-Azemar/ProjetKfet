package com.projetkfet.backend.model.order;

import com.projetkfet.backend.model.stock.Product;
import jakarta.persistence.*;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Entity
public class ProductOrder {
    @Id
    @GeneratedValue
    @UuidGenerator
    private UUID id;

    private String state;

    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}

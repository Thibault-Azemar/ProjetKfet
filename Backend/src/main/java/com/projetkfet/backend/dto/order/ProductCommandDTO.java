package com.projetkfet.backend.dto.order;

import java.util.UUID;

public class ProductCommandDTO {

//    Nom du produit
    private String name;
//    id produit
    private UUID id;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

}

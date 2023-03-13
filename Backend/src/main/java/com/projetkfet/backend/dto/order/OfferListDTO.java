package com.projetkfet.backend.dto.order;

import java.util.List;
import java.util.UUID;

public class OfferListDTO {
    private List<UUID> productIds;
    private List<UUID> subcatIds;
    private List<UUID> catIds;

    public List<UUID> getProductIds() {
        return productIds;
    }

    public void setProductIds(List<UUID> productIds) {
        this.productIds = productIds;
    }

    public List<UUID> getSubcatIds() {
        return subcatIds;
    }

    public void setSubcatIds(List<UUID> subcatIds) {
        this.subcatIds = subcatIds;
    }

    public List<UUID> getCatIds() {
        return catIds;
    }

    public void setCatIds(List<UUID> catIds) {
        this.catIds = catIds;
    }
}

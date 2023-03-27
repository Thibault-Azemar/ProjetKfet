package com.projetkfet.backend.projection.order;

import java.util.List;
import java.util.UUID;

public interface OfferProjection {
    List<UUID> getProductIds();

    List<UUID> getSubcatIds();

    List<UUID> getCatIds();
}

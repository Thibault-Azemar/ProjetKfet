package com.projetkfet.backend.dto.stock;

import java.util.UUID;

public interface CategoryProjection {
    UUID getId();

    String getName();

    String getImage();
}

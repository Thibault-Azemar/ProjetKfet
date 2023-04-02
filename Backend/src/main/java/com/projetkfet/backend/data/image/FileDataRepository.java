package com.projetkfet.backend.data.image;

import com.projetkfet.backend.model.image.FileData;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface FileDataRepository extends CrudRepository<FileData, Integer> {
    Optional<FileData> findByName(String fileName);
}

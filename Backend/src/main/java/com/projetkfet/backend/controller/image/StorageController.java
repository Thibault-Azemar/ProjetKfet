package com.projetkfet.backend.controller.image;

import com.projetkfet.backend.data.image.FileDataRepository;
import com.projetkfet.backend.model.image.FileData;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Optional;

@Controller
@CrossOrigin(origins = "*")
@RequestMapping(path="/image")
public class StorageController {

    private static final Logger logger = LogManager.getLogger("info");

    @Autowired
    private FileDataRepository fileDataRepository;

    private final String FOLDER_PATH="";

    @PostMapping("")
    public String uploadImageToFIleSystem(@RequestParam("image") MultipartFile file) throws IOException {
        logger.info("uploadImageToFIleSystem()");
        String filePath=FOLDER_PATH+file.getOriginalFilename();
        logger.info("filePath: "+filePath);


        FileData fileData = new FileData();
        fileData.setName(file.getOriginalFilename());
        fileData.setType(file.getContentType());
        fileData.setFilePath(filePath);
        fileDataRepository.save(fileData);
        logger.info("fileData: "+fileData);

        file.transferTo(new File(filePath));
        logger.info("test");

        return "file uploaded successfully : " + filePath;
    }

    @GetMapping("/{fileName}")
    public ResponseEntity<?> downloadImageFromFileSystem(@PathVariable String fileName) throws IOException {

        Optional<FileData> fileData = fileDataRepository.findByName(fileName);
        String filePath=fileData.get().getFilePath();
        byte[] imageData = Files.readAllBytes(new File(filePath).toPath());

        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(imageData);

    }
}

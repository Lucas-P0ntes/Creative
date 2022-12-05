package com.example.cloundbackend.controller;

import com.example.cloundbackend.model.ImageModel;
import com.example.cloundbackend.service.IImage;

import org.apache.catalina.core.ApplicationContext;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;

import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;

@CrossOrigin(origins = "*")
@RestController
    @EnableWebMvc
public class ImageController {
    @Autowired
    private IImage service;


    //Buscar imagem
    @GetMapping("/image")
    public ArrayList<ImageModel> buscarPeloid(){
        var res = service.buscartodos();
        return res;
    }

    //Enviar imagem
    @PostMapping(value="/image", consumes= {MediaType.APPLICATION_JSON_VALUE,   MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<String> save(@RequestPart("file") MultipartFile file , RedirectAttributes redirectAttributes){
        try {
            // Get the file and save it somewhere
            byte[] bytes = file.getBytes();
            String UPLOADED_FOLDER = "C://Clound//Clound-backend//src//main//resources//img//";
            Path path = Paths.get(UPLOADED_FOLDER +  file.getOriginalFilename());
            Files.write(path, bytes);
            ImageModel res  ;
            res = new ImageModel();
            res.setImg(file.getOriginalFilename());
            service.enviarimg(res);
            redirectAttributes.addFlashAttribute("message",
                    "You successfully uploaded '" + file.getOriginalFilename() + "'");
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }



    //Buscar Imagem por nome
    @RequestMapping(value = "/imagens/{nome}", method = RequestMethod.GET,
            produces = MediaType.IMAGE_PNG_VALUE)
    public @ResponseBody byte[] getFile(@PathVariable String nome) throws IOException {
        InputStream in = getClass()
                .getResourceAsStream("/com/example.cloundbackend/"+nome);
        return IOUtils.toByteArray(in);
    }
//    public ResponseEntity<byte[]> getImage(@PathVariable String nome) throws IOException {
////
//
//
//        byte[] bytes = StreamUtils.copyToByteArray(imgFile.getInputStream());
//        return ResponseEntity
//                .ok()
//                .contentType(MediaType.IMAGE_PNG )
//                .body(bytes);
//    }
    //Apagar imagem

    //Alterar imagem

}



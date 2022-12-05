package com.example.cloundbackend.service;

import com.example.cloundbackend.model.ImageModel;
import com.example.cloundbackend.repositorioDAO.ImageDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ImageImpl implements IImage {
    @Autowired
    private ImageDAO dao;

    @Override
    public ArrayList<ImageModel>buscartodos(){
        ArrayList<ImageModel> all = (ArrayList<ImageModel>)  dao.findAll();
        return all;

    }

    @Override
    public ImageModel enviarimg(ImageModel dados){
          dao.save(dados);
        return null;

    }
}

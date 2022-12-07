package com.example.cloundbackend.service;

import com.example.cloundbackend.model.ImageModel;

import java.util.ArrayList;

public interface IImage {
    public ArrayList<ImageModel>buscartodos();
    public ImageModel enviarimg(ImageModel dados);
    public ImageModel exlcuirimg(Integer id);
}

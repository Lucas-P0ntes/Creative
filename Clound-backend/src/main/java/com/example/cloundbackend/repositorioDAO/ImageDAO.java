package com.example.cloundbackend.repositorioDAO;

import com.example.cloundbackend.model.ImageModel;
import org.springframework.data.repository.CrudRepository;

public interface ImageDAO extends CrudRepository<ImageModel, Integer> {
}

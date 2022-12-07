package com.example.cloundbackend.model;

import javax.persistence.*;

@Entity
@Table(name="img")
public class ImageModel {
    @Column(name="id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    private String img;
    public Integer getId() {
        return id;
    }

//    public void setId(Integer id) {
//        this.id = id;
//    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
}

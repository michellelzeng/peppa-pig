package com.hello;

import javax.persistence.*;
import java.util.List;

@Entity
public class PiggiePost {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private long key;
    private String title;
    private String content;

    @OneToMany(fetch=FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Photo> photos;

    public PiggiePost() {
    }

    public PiggiePost(String title, String content, List<Photo> photos) {
        this.title = title;
        this.content = content;
        this.photos = photos;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public String toString(){
        return String.format("%s %s %s", id, title, content);
    }

    public long getKey() {
        return id;
    }

    public void setKey(long key) {
        this.key = key;
    }


    public List<Photo> getPhotos() {
        return photos;
    }

    public void setPhotos(List<Photo> photos) {
        this.photos = photos;
    }
}

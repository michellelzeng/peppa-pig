package com.hello;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PiggiePost {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private long key;
    private String title;
    private String content;

    public PiggiePost() {
    }

    public PiggiePost(String title, String content) {
        this.title = title;
        this.content = content;
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
}

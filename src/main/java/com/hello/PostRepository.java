package com.hello;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "post", path = "post")
public interface PostRepository extends CrudRepository<Post, Long> {

    List<Post> findByTitle(@Param("title") String title);
}

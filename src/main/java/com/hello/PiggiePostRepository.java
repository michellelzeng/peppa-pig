package com.hello;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "piggiepost", path = "piggiepost")
public interface PiggiePostRepository extends PagingAndSortingRepository<PiggiePost, Long> {

    List<PiggiePost> findByTitle(@Param("title") String title);
}

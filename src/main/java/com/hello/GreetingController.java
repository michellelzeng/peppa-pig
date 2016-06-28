package com.hello;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
public class GreetingController {

    private static final String template = "Helloaaasdfsdf, %s!";
    private final AtomicLong counter = new AtomicLong();
    private PiggiePostRepository repository;

    @Autowired
    public GreetingController(PiggiePostRepository repository) {

        this.repository = repository;
    }

    @RequestMapping("/greeting")
    public Iterable<PiggiePost> greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return repository.findAll(new Sort(new Sort.Order(Sort.Direction.DESC, "id")));
    }
}

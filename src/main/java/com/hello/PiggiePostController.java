package com.hello;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.atomic.AtomicLong;

@RestController
public class PiggiePostController {

    private static final String template = "Helloaaasdfsdf, %s!";
    private final AtomicLong counter = new AtomicLong();
    private PiggiePostRepository piggiePostRepository;

    @Autowired
    public PiggiePostController(PiggiePostRepository piggiePostRepository) {
        this.piggiePostRepository = piggiePostRepository;
    }

    @RequestMapping("/getAllPiggiePosts")
    public Iterable<PiggiePost> greeting(@RequestParam(value="name", defaultValue="World") String name) {
        return piggiePostRepository.findAll(new Sort(new Sort.Order(Sort.Direction.DESC, "id")));
    }
}

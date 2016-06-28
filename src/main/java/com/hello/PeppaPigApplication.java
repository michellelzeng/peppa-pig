package com.hello;

import com.google.common.collect.Lists;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;



@SpringBootApplication
public class PeppaPigApplication {

	private Logger log = LoggerFactory.getLogger(PeppaPigApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(PeppaPigApplication.class, args);
	}

	@Bean
	public CommandLineRunner demo(PiggiePostRepository repository) {
		return (args) -> {
			// save a couple of Posts
			repository.save(new PiggiePost("Post 1", "Daily post May 20", Lists.newArrayList(new Photo("1"), new Photo("2"))));
			repository.save(new PiggiePost("Post 2", "Daily post May 21", Lists.newArrayList(new Photo("3"), new Photo("4"))));

			// fetch all posts
			log.info("posts found with findAll():");
			log.info("-------------------------------");
			for (PiggiePost piggiePost : repository.findAll()) {
				log.info(piggiePost.toString());
			}
			log.info("");

			// fetch an individual post by ID
			PiggiePost piggiePost = repository.findOne(1L);
			log.info("Post found with findOne(1L):");
			log.info("--------------------------------");
			log.info(piggiePost.toString());
			log.info("");

			// fetch posts by last name
			log.info("Post found with findByLastName('Bauer'):");
			log.info("--------------------------------------------");
			for (PiggiePost piggiePost1 : repository.findByTitle("Post 1")) {
				log.info(piggiePost1.toString());
			}
			log.info("");
		};
	}

}

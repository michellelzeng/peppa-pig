package com.hello;

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
	public CommandLineRunner demo(PostRepository repository) {
		return (args) -> {
			// save a couple of Posts
			repository.save(new Post("Post 1", "Daily post May 20"));
			repository.save(new Post("Post 2", "Daily post May 21"));
			repository.save(new Post("Post 3", "Daily post May 22"));
			repository.save(new Post("Post 4", "Daily post May 23"));
			repository.save(new Post("Post 5", "Daily post May 24"));

			// fetch all customers
			log.info("Customers found with findAll():");
			log.info("-------------------------------");
			for (Post post : repository.findAll()) {
				log.info(post.toString());
			}
			log.info("");

			// fetch an individual customer by ID
			Post post = repository.findOne(1L);
			log.info("Post found with findOne(1L):");
			log.info("--------------------------------");
			log.info(post.toString());
			log.info("");

			// fetch customers by last name
			log.info("Customer found with findByLastName('Bauer'):");
			log.info("--------------------------------------------");
			for (Post post1 : repository.findByTitle("Post 1")) {
				log.info(post1.toString());
			}
			log.info("");
		};
	}

}

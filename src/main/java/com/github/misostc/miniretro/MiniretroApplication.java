package com.github.misostc.miniretro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.hateoas.config.EnableHypermediaSupport;

@SpringBootApplication
public class MiniretroApplication {

	public static void main(String[] args) {
		SpringApplication.run(MiniretroApplication.class, args);
	}

}

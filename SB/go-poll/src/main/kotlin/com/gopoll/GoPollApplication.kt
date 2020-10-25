package com.gopoll

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.data.jpa.repository.config.EnableJpaAuditing
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter


@EnableJpaAuditing
@SpringBootApplication
class GoPollApplication {
	@Bean
	fun corsConfigurer(): WebMvcConfigurer? {
		return object : WebMvcConfigurerAdapter() {
			override fun addCorsMappings(registry: CorsRegistry) {
				registry.addMapping("/**").allowedOrigins("*")
			}
		}
	}
}

fun main(args: Array<String>) {
	runApplication<GoPollApplication>(*args)
}

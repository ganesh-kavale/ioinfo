package com.ioinfo.info.configuration;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class InfoAppConfiguration {

	@Bean
	public ModelMapper modelMapper() {
		
		return new ModelMapper();
	}
	
	@Bean
	public RestTemplate restTemplateMapper() {
		
		return new RestTemplate();
	}
	
//	@Bean
//	public WebMvcConfigurer corsConfigurer() {
//	    return new WebMvcConfigurer() {
//	        @Override
//	        public void addCorsMappings(CorsRegistry registry) {
//	            registry.addMapping("/employee-app/api/**")
//	                    .allowedOrigins("http://localhost:4700")
//	                    .allowedMethods("GET", "PUT", "DELETE")
//	                    .allowedHeaders("*");
//	        }
//	    };
//	}
//	
	
}

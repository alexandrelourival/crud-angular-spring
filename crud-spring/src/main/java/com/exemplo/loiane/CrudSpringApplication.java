package com.exemplo.loiane;

//import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.context.annotation.Bean;

//import com.exemplo.loiane.model.Course;
//import com.exemplo.loiane.repository.CourseRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	/*@Bean
	CommandLineRunner initDatabase(CourseRepository courseRepository){
		return args -> {
			// Utilizando o application.properties para fazer o mesmo
			//courseRepository.deleteAll();
			
			Course c = new Course();

			c.setName("Angular com Spring");
			c.setCategory("front-end");

			courseRepository.save(c);
		};
	}*/
}

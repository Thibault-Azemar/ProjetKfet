package com.projetkfet.backend;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
//@CrossOrigin("http://localhost:8081/")
public class BackendApplication {

//    @Autowired
//    private JwtRequestFilter jwtRequestFilter;

    private static final Logger logger = LogManager.getLogger("UserLogger");

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    /*@Bean
    public FilterRegistrationBean<JwtRequestFilter> jwtRequestFilterRegistration() {
        FilterRegistrationBean<JwtRequestFilter> registrationBean = new FilterRegistrationBean<>();
        registrationBean.setFilter(jwtRequestFilter);
        registrationBean.addUrlPatterns("/*");
        return registrationBean;
    }*/



    @GetMapping("/hello")
    public String sayHello(@RequestParam(value = "myName", defaultValue = "World") String name) {
        logger.info("A Hello World Message");
        return String.format("Hello %s!", name);
    }

}
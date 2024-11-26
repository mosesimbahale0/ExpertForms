package com.experforms.generator.config

import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Configuration
class WebConfig : WebMvcConfigurer {
    override fun addCorsMappings(registry: CorsRegistry) {
        registry.addMapping("/**") // Match all endpoints
            .allowedOrigins("*") // Allow all origins
            .allowedMethods("GET", "POST", "PUT", "DELETE") // Allow specific HTTP methods
    }
}

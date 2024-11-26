package com.experforms.generator.config

import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Configuration
class WebConfig : WebMvcConfigurer {
    override fun addCorsMappings(registry: CorsRegistry) {
        registry.addMapping("/**") // Match all endpoints
            .allowedOrigins(
                "https://expertforms.vercel.app",  // Allow Vercel origin
                "http://localhost:5173"           // Allow localhost for development
            )
            .allowedMethods("GET", "POST", "PUT", "DELETE") // Allow specific HTTP methods
            .allowedHeaders("*") // Allow all headers
            .allowCredentials(true) // Allow cookies or credentials if required
    }
}

package com.experforms.generator.controller

import jakarta.servlet.http.HttpServletRequest
import org.springframework.boot.web.servlet.error.ErrorController
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.RequestMapping

@CrossOrigin(origins = ["*"]) // Allow * origins
@Controller
class CustomErrorController : ErrorController {

    @RequestMapping("/error")
    fun handleError(request: HttpServletRequest): String {
        val status = request.getAttribute("javax.servlet.error.status_code") as Int?
        return when (status) {
            404 -> "404" // Maps to 404.html in the templates or static folder
            500 -> "500" // Maps to 500.html
            else -> "error" // Maps to a generic error.html
        }
    }
}

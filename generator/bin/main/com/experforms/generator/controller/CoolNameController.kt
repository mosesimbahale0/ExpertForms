package com.experforms.generator.controller

import com.experforms.generator.model.CoolName
import com.experforms.generator.service.CoolNameService
import org.springframework.web.bind.annotation.*

//@CrossOrigin(origins = ["*"]) // Allow * origins
@RestController
@RequestMapping("/api/cool-names")
class CoolNameController(private val service: CoolNameService) {

    @PostMapping("/generate")
    fun generateCoolName(): CoolName = service.generateAndSaveCoolName()

    @GetMapping
    fun getAllCoolNames(): List<CoolName> = service.getAllCoolNames()
}

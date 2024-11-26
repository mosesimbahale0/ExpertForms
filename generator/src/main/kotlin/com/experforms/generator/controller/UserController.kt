package com.experforms.generator.controller

import com.experforms.generator.model.User
import com.experforms.generator.service.UserService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["*"]) // Allow * origins
@RestController
@RequestMapping("/api/users")
class UserController(private val userService: UserService) {

    @GetMapping
    fun getUsers(): ResponseEntity<List<User>> = ResponseEntity.ok(userService.getAllUsers())

    @GetMapping("/{id}")
    fun getUser(@PathVariable id: String): ResponseEntity<User?> =
        ResponseEntity.ok(userService.getUserById(id))

    @PostMapping
    fun createUser(@RequestBody user: User): ResponseEntity<User> =
        ResponseEntity.ok(userService.createUser(user))
}

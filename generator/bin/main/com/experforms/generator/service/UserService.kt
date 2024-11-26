package com.experforms.generator.service

import com.experforms.generator.model.User
import com.experforms.generator.repository.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService(private val userRepository: UserRepository) {

    fun getAllUsers(): List<User> = userRepository.findAll()

    fun getUserById(id: String): User? = userRepository.findById(id).orElse(null)

    fun createUser(user: User): User = userRepository.save(user)
}

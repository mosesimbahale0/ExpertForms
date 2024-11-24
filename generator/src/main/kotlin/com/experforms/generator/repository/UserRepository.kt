package com.experforms.generator.repository


import com.experforms.generator.model.User
import org.springframework.data.mongodb.repository.MongoRepository

interface UserRepository : MongoRepository<User, String>

package com.experforms.generator.repository

import com.experforms.generator.model.Post
import org.springframework.data.mongodb.repository.MongoRepository

interface PostRepository : MongoRepository<Post, String>

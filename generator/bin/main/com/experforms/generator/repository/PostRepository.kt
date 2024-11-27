package com.experforms.generator.repository

import com.experforms.generator.model.Post
import org.bson.types.ObjectId
import org.springframework.data.mongodb.repository.MongoRepository

interface PostRepository : MongoRepository<Post, ObjectId>

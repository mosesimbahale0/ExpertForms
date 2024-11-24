package com.experforms.generator.repository


import com.experforms.generator.model.Comment
import org.springframework.data.mongodb.repository.MongoRepository

interface CommentRepository : MongoRepository<Comment, String>

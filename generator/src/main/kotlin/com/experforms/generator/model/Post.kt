package com.experforms.generator.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "posts")
data class Post(
    @Id val id: String? = null,
    val userId: String,
    val title: String,
    val content: String,
    val coverImage: String
)

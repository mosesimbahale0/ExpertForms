
package com.experforms.generator.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "comments")
data class Comment(
    @Id val id: String? = null,
    val postId: String,
    val sender: String,
    val text: String,
    val replies: List<Reply> = emptyList()
)

package com.experforms.generator.service

import com.experforms.generator.model.Post
import com.experforms.generator.repository.PostRepository
import org.bson.types.ObjectId
import org.springframework.stereotype.Service

@Service
class PostService(private val postRepository: PostRepository) {

    // Retrieve all posts
    fun getAllPosts(): List<Post> = postRepository.findAll()

    // Retrieve a post by its ID
    fun getPostById(id: String): Post? {
        return try {
            // Convert the String id to ObjectId before querying
            val objectId = ObjectId(id)
            postRepository.findById(objectId).orElse(null)
        } catch (e: IllegalArgumentException) {
            // Handle invalid ObjectId format
            null
        }
    }

    // Create a new post
    fun createPost(post: Post): Post = postRepository.save(post)

    // Update an existing post
    fun updatePost(id: String, updatedPost: Post): Post? {
        return try {
            // Convert the String id to ObjectId before checking and updating
            val objectId = ObjectId(id)
            if (postRepository.existsById(objectId)) {
                val postToSave = updatedPost.copy(id = id) // Use the same id for update
                postRepository.save(postToSave)
            } else {
                null
            }
        } catch (e: IllegalArgumentException) {
            // Handle invalid ObjectId format
            null
        }
    }

    // Delete a post by its ID
    fun deletePost(id: String) {
        try {
            // Convert the String id to ObjectId before deleting
            val objectId = ObjectId(id)
            if (postRepository.existsById(objectId)) {
                postRepository.deleteById(objectId)
            }
        } catch (e: IllegalArgumentException) {
            // Handle invalid ObjectId format
        }
    }
}

package com.experforms.generator.service

import com.experforms.generator.model.Post
import com.experforms.generator.repository.PostRepository
import org.springframework.stereotype.Service

@Service
class PostService(private val postRepository: PostRepository) {

    fun getAllPosts(): List<Post> = postRepository.findAll()

    fun getPostById(id: String): Post? = postRepository.findById(id).orElse(null)

    fun createPost(post: Post): Post = postRepository.save(post)

    fun updatePost(id: String, updatedPost: Post): Post? {
        return if (postRepository.existsById(id)) {
            val postToSave = updatedPost.copy(id = id)
            postRepository.save(postToSave)
        } else {
            null
        }
    }

    fun deletePost(id: String) {
        if (postRepository.existsById(id)) {
            postRepository.deleteById(id)
        }
    }
}

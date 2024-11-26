package com.experforms.generator.service

import com.experforms.generator.model.Comment
import com.experforms.generator.repository.CommentRepository
import org.springframework.stereotype.Service

@Service
class CommentService(private val commentRepository: CommentRepository) {

    fun getCommentsByPostId(postId: String): List<Comment> =
        commentRepository.findAll().filter { it.postId == postId }

    fun createComment(comment: Comment): Comment = commentRepository.save(comment)
}

package com.experforms.generator.controller
import com.experforms.generator.model.Comment
import com.experforms.generator.service.CommentService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("/api/comments")
class CommentController(private val commentService: CommentService) {

    @GetMapping("/{postId}")
    fun getComments(@PathVariable postId: String): ResponseEntity<List<Comment>> =
        ResponseEntity.ok(commentService.getCommentsByPostId(postId))

    @PostMapping
    fun createComment(@RequestBody comment: Comment?): Any {
        return try {
            val createdComment = commentService.createComment(comment!!)
            ResponseEntity.ok(createdComment)
        } catch (e: IllegalArgumentException) {
            ResponseEntity.badRequest().body(e.message)
        } catch (e: Exception) {
            ResponseEntity.internalServerError().build()
        }
    }
}
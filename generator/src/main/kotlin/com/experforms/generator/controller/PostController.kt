package com.experforms.generator.controller

import com.experforms.generator.model.Post
import com.experforms.generator.service.PostService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*


@CrossOrigin(origins = ["*"]) // Allow * origins
@RestController
@RequestMapping("/api/posts")
class PostController(private val postService: PostService) {

    @GetMapping
    fun getPosts(): ResponseEntity<List<Post>> = ResponseEntity.ok(postService.getAllPosts())

    @GetMapping("/{id}")
    fun getPost(@PathVariable id: String): ResponseEntity<Post?> =
        ResponseEntity.ok(postService.getPostById(id))

    @PostMapping
    fun createPost(@RequestBody post: Post): ResponseEntity<Post> =
        ResponseEntity.ok(postService.createPost(post))

    @PutMapping("/{id}")
    fun updatePost(@PathVariable id: String, @RequestBody updatedPost: Post): ResponseEntity<Post?> =
        ResponseEntity.ok(postService.updatePost(id, updatedPost))

    @DeleteMapping("/{id}")
    fun deletePost(@PathVariable id: String): ResponseEntity<Void> {
        postService.deletePost(id)
        return ResponseEntity.noContent().build()
    }
}

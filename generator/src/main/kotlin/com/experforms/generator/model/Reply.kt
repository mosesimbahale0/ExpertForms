package com.experforms.generator.model

import java.time.LocalDateTime

data class Reply(
    val id: String? = null,
    val messageId: String,
    val sender: String,
    val text: String,
    val timestamp: LocalDateTime = LocalDateTime.now()
)
package com.experforms.generator.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "cool_names")
data class CoolName(
    @Id val id: String? = null,
    val name: String
)

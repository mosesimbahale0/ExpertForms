package com.experforms.generator.service

import com.experforms.generator.model.CoolName
import com.experforms.generator.repository.CoolNameRepository
import org.springframework.stereotype.Service
import kotlin.random.Random

@Service
class CoolNameService(private val repository: CoolNameRepository) {

    private val adjectives = listOf(
        "happy", "brave", "nifty", "mystifying", "cool",
        "amazing", "daring", "bold", "eager", "fancy"
    )

    private val famousLastNames = listOf(
        "Lovelace", "Curie", "Tesla", "Newton", "Einstein",
        "Darwin", "Galileo", "Hopper", "Feynman", "Turing"
    )

    fun generateAndSaveCoolName(): CoolName {
        val randomAdjective = adjectives.random()
        val randomLastName = famousLastNames.random()
        val generatedName = "$randomAdjective-$randomLastName"

        return repository.save(CoolName(name = generatedName))
    }

    fun getAllCoolNames(): List<CoolName> = repository.findAll()
}

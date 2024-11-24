package com.experforms.generator.repository
import org.springframework.data.mongodb.repository.MongoRepository
import com.experforms.generator.model.CoolName



interface CoolNameRepository : MongoRepository<CoolName, String>

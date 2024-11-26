package com.experforms.generator.service

import com.experforms.generator.model.CoolName
import com.experforms.generator.repository.CoolNameRepository
import org.springframework.stereotype.Service
import kotlin.random.Random

@Service
class CoolNameService(private val repository: CoolNameRepository) {

//    private val coolAdjectives = listOf(
//        "Telekinetic", "Shapeshifting", "Superhuman", "Sonic", "Invisibility",
//        "Mind-Reading", "Time-Traveling", "Weather-Controlling", "X-Ray Vision", "Telepathic"
//    )
//
//    private val awesomeNouns = listOf(
//        "Blast", "Speed", "Strength", "Agility", "Sight",
//        "Manipulation", "Jump", "Command", "Aura", "Shift"
//    )

    private val mysteriousAdjectives = listOf(
        "Enigma", "Elusive", "Shadowy", "Whispering", "Cryptic",
        "Ghostly", "Veiled", "Hidden", "Anonymous", "Unseen",
        "Obscure", "Mystical", "Secretive", "Ethereal", "Arcane",
        "Phantom", "Intangible", "Unknown", "Esoteric", "Spectral",
        "Chimerical", "Invisible", "Masked", "Dim", "Unfathomable",
        "Undefined", "Ambiguous", "Uncanny", "Opaque", "Abstract",
        "Furtive", "Otherworldly", "Concealed", "Evasive", "Blurred",
        "Subtle", "Untraceable", "Vague", "Impenetrable", "Nebulous",
        "Hazy", "Enigmatic", "Muffled", "Occult", "Transient",
        "Ephemeral", "Uncharted", "Intricate", "Shrouded", "Puzzling",
        "Silent", "Dusky", "Arcadian", "Unknown", "Shadowed",
        "Oblique", "Incomprehensible", "Murky", "Unknowable", "Mythic",
        "Surreal", "Haunting", "Misty", "Twilight", "Cloaked",
        "Dreamlike", "Soft-spoken", "Sly", "Faded", "Distant",
        "Whimsical", "Ecliptic", "Cloistered", "Eerie", "Unrevealed",
        "Darkened", "Timeless", "Subliminal", "Vanishing", "Faint",
        "Obfuscated", "Deep", "Unspoken", "Profound", "Lost",
        "Veiled", "Reticent", "Enclosed", "Veiling", "Fleeting",
        "Untold", "Unknown", "Thick", "Chimeric", "Reclusive",
        "Disguised", "Muted", "Spectral", "Dimmed", "Hidden-away"
    )


    private val nounList = listOf(
        "Writer", "Observer", "Spectator", "Wanderer", "Muse",
        "Enigma", "Whisperer", "Shadow", "Spark", "Flame",
        "Seeker", "Phantom", "Traveler", "Visionary", "Scribe",
        "Dreamer", "Oracle", "Gazer", "Keeper", "Cipher",
        "Nomad", "Navigator", "Drifter", "Thinker", "Vigil",
        "Shade", "Harbinger", "Guardian", "Echo", "Loom",
        "Flicker", "Lurker", "Ghost", "Sentinel", "Rogue",
        "Sleuth", "Horizon", "Sign", "Beacon", "Wisp",
        "Fable", "Myth", "Watcher", "Stranger", "Spirit",
        "Specter", "Paradox", "Anchor", "Mystery", "Warden",
        "Hunter", "Light", "Shadowcaster", "Cipher", "Pilgrim",
        "Nomad", "Omen", "Drifter", "Lightbearer", "Wayfarer",
        "Fog", "Navigator", "Alchemist", "Voyager", "Seer",
        "Protector", "Shapeshifter", "Guardian", "Outsider", "Wraith",
        "Pathfinder", "Key", "Prophet", "Nomad", "Riddle",
        "Cipher", "Sculptor", "Mirage", "Navigator", "Lantern",
        "Tale", "Keyholder", "Pioneer", "Messenger", "Allegory",
        "Mapmaker", "Cipher", "Oracle", "Beacon", "Truthkeeper",
        "Storyteller", "Wisp", "Elder", "Shade", "Mind",
        "Unknown", "Wayfinder", "Starcatcher", "Puzzle", "Paradox"
    )


    fun generateAndSaveCoolName(): CoolName {
//        val randomAdjective = coolAdjectives.random()
//        val randomNoun = awesomeNouns.random()
//        val generatedName = "$randomAdjective $randomNoun" // Combine with space


        val randomAdjective = mysteriousAdjectives.random()
        val randomNoun = nounList.random()
        val generatedName = "$randomAdjective $randomNoun"


        return repository.save(CoolName(name = generatedName))
    }

    fun getAllCoolNames(): List<CoolName> = repository.findAll()
}
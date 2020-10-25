package com.gopoll.model

data class PollQuestion (val id: Long,
                         val pollMessage: String,
                         val question: String,
                         val option1: String,
                         val isTrueO1: Boolean,
                         val option2: String,
                         val isTrueO2: Boolean,
                         val option3: String,
                         val isTrueO3: Boolean,
                         val option4: String,
                         val isTrueO4: Boolean
)
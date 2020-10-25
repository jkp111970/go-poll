package com.gopoll.model

data class OptionAllData(val id: Long, val questionMasterId: Long,
                         val optionText: String, val isCorrectAnswer: Boolean)

data class QuestionAllData(val id: Long, val quizMasterId: Long,
                           val questionText: String, val options:
                           List<OptionAllData>)

data class QuizMasterAllData(val id: Long, val subject: String, val questions:
List<QuestionAllData>)
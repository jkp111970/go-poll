package com.gopoll.repository

import com.gopoll.model.Question
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface QuestionMasterRepository : JpaRepository<Question,Long> {
    fun findAllByQuizMasterId(quizMasterId: Long) : List<Question>
}
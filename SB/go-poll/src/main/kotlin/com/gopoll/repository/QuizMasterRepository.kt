package com.gopoll.repository

import com.gopoll.model.QuizMaster
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface QuizMasterRepository : JpaRepository<QuizMaster, Long> {
    fun findAllByQuizPublisherIdOrderByCreatedDateDesc(quizPublisherId: Long) :
            List<QuizMaster>
}
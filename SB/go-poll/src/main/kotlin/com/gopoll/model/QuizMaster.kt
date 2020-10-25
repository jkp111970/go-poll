package com.gopoll.model

import org.springframework.data.jpa.domain.support.AuditingEntityListener
import javax.persistence.*

@Entity(name = "quiz_master")
@EntityListeners(AuditingEntityListener::class)
data class QuizMaster(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        val id: Long,
        @Column(name="quiz_publisher_id")
        val quizPublisherId: Long,
        val subject: String,
        val topic: String,
        @Column(name="quiz_type")
        val quizType: Int,
        @Column(name="negative_mark_per_q")
        val negativeMarkPerQuestion: Int,
        @Column(name="negative_percentile")
        val negativePercentile: Double,
        @Column(name="quiz_time_limit_min")
        val quizTimeLimitMinute: Int,
        @Column(name="time_limit_per_q_sec")
        val timeLimitPerQuestion: Int,
        @Column(name="mark_per_q")
        val marksPerQuestion: Int
) : Auditable()
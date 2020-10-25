package com.gopoll.model

import org.springframework.data.jpa.domain.support.AuditingEntityListener
import javax.persistence.*

@Entity(name = "question_master")
@EntityListeners(AuditingEntityListener::class)
data class Question (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,
    @Column(name="quiz_master_id")
    val quizMasterId: Long,
    @Column(name="question_text")
    val questionText: String,
    @Column(name="question_image")
    val questionImage: String,
    @Column(name="question_vedio")
    val questionVedio: String,
    @Column(name="question_audio")
    val questionAudio: String,
    @Column(name="multiple_choise_flag")
    val multiChoiceFlag: Boolean,
    @Column(name="question_explaination")
    val questionExplaination: String,
    val marks: Int,
    @Column(name="complexity_factor")
    val complexityFactor : Int
) : Auditable()
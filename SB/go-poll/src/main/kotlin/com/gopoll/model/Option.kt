package com.gopoll.model

import org.springframework.data.jpa.domain.support.AuditingEntityListener
import javax.persistence.*

@Entity(name = "option_master")
@EntityListeners(AuditingEntityListener::class)
data class Option(
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  val id: Long,
  @Column(name="question_master_id")
  val questionMasterId : Long,
  @Column(name="option_text")
  val optionText: String,
  @Column(name="option_image")
  val optionImage: String,
  @Column(name="option_vedio")
  val optionVedio: String,
  @Column(name="option_audio")
  val optionAudio: String,
  @Column(name="is_correct_answer")
  val isCorrectAnswer: Boolean
) : Auditable()
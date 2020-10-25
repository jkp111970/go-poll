package com.gopoll.model

import com.fasterxml.jackson.annotation.JsonProperty
import org.springframework.data.jpa.domain.support.AuditingEntityListener
import javax.persistence.*

@Entity(name = "quiz_publisher")
@EntityListeners(AuditingEntityListener::class)
data class Publisher (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,
    val name: String,
    @Column(name="contact_no")
    @JsonProperty("contact_no")
    val contactNo: String,
    val email: String,
    val password: String
) : Auditable()
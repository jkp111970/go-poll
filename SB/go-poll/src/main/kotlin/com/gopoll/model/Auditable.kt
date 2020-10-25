package com.gopoll.model

import com.fasterxml.jackson.annotation.JsonIgnore
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedDate
import org.springframework.data.jpa.domain.support.AuditingEntityListener
import java.util.*
import javax.persistence.*

@MappedSuperclass
@EntityListeners(AuditingEntityListener::class)
open class Auditable {
    @JsonIgnore
    @Column(name = "audit_create_date")
    @CreatedDate
    @Temporal(TemporalType.TIMESTAMP)
    var createdDate : Date = Date()
    @JsonIgnore
    @Column(name = "audit_update_date")
    @LastModifiedDate
    @Temporal(TemporalType.TIMESTAMP)
    var lastModifiedDate : Date = Date()
}
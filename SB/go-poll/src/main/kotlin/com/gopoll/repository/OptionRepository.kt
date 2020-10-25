package com.gopoll.repository

import com.gopoll.model.Option
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface OptionRepository : JpaRepository<Option, Long> {
    fun findAllByQuestionMasterId(questionMasterId: Long) : List<Option>
}
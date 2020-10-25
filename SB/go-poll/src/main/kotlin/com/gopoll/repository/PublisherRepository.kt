package com.gopoll.repository

import com.gopoll.model.Publisher
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface PublisherRepository : JpaRepository<Publisher, Long>
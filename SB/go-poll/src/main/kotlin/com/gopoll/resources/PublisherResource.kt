package com.gopoll.resources

import com.gopoll.model.Publisher
import com.gopoll.repository.PublisherRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class PublisherResource {

    @Autowired
    lateinit var publisherRepository : PublisherRepository

    @PostMapping("/publishers")
    fun createPublisher(@RequestBody publisher : Publisher) :
            Publisher {
        println("### Create Publisher:" + publisher)
        val respPublisher = publisherRepository.save(publisher)
        return respPublisher
    }

    @GetMapping("/publishers")
    fun getAllPublishers() : List<Publisher> {
        return publisherRepository.findAll();
    }

}
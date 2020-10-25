package com.gopoll.resources

import com.gopoll.model.Poll
import com.gopoll.model.PollQuestion
import com.gopoll.model.QuizMaster
import com.gopoll.model.QuizMasterAllData
import com.gopoll.service.PollService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
class PollResource {
    @Autowired
    lateinit var pollService: PollService

    @PostMapping("/publishers/{id}/polls")
    fun createPoll(@RequestBody pollQuestions : List<PollQuestion>,
                   @PathVariable(value="id") publisherId : Long) :
            Unit {
        println("#### Getting value of $publisherId")
        println("### Actual Request: $pollQuestions")
        pollService.createPoll(pollQuestions,publisherId)
    }

    @GetMapping("/publishers/{id}/polls")
    fun getPolls(@PathVariable(value="id") publisherId : Long) : List<Poll> {
        return pollService.getPolls(publisherId)
    }

    @GetMapping("/publishers/{id}/polls/{pollId}")
    fun getQuizMasterAllData(@PathVariable(value = "id") publisherId: Long,
    @PathVariable(value = "pollId") quizMasterId: Long)
            : QuizMasterAllData {
        return pollService.findAllQuizMasterDataByPublisherIdAndQuizId(publisherId, quizMasterId)
    }
}
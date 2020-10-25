package com.gopoll.service

import com.gopoll.model.*
import com.gopoll.repository.OptionRepository
import com.gopoll.repository.QuestionMasterRepository
import com.gopoll.repository.QuizMasterRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.util.*

@Service
class PollService {

    @Autowired
    lateinit var quizMasterRepository: QuizMasterRepository
    @Autowired
    lateinit var questionMasterRepository: QuestionMasterRepository
    @Autowired
    lateinit var optionRepository: OptionRepository

    fun getPolls(publisherId: Long) : List<Poll> {
        val quizMaster : List<QuizMaster> = quizMasterRepository
        .findAllByQuizPublisherIdOrderByCreatedDateDesc(publisherId)
        return quizMaster.map{
            Poll(it.id,it.subject,it.createdDate)
        }
    }

    fun createPoll(pollQuestions : List<PollQuestion>, publisherId : Long) :
            Unit {
        //Quiz Master
        var quizMaster : QuizMaster = getQuizMasterForPoll(pollQuestions,
                publisherId, 2)
        quizMaster = quizMasterRepository.save(quizMaster)
        println("Table 1 done:$quizMaster")
        //Questions
        pollQuestions.forEach {
            var qst: Question = getQuestionFromPollQuestion(pollQuestion = it,
                    quizMasterid = quizMaster.id)
            qst = questionMasterRepository.save(qst)
            println("Questions Done: $qst")

            //Options
            var options = getOptionsFromPollQuestion(it, qst.id)
            options.forEach({
                val optResponse = optionRepository.save(it)
                println("Option $optResponse")
            })
        }
    }

    fun getQuizMasterForPoll(pollQuestions : List<PollQuestion>,
                            publisherId : Long, quizType: Int)
            : QuizMaster {
        val quizMaster = QuizMaster(0,publisherId,pollQuestions[0]
                .pollMessage,"poll",quizType,0,0.0,0,0,0)

        return quizMaster
    }

    fun getQuestionFromPollQuestion(pollQuestion: PollQuestion, quizMasterid
    : Long) : Question {
        val question : Question = Question(0, quizMasterid,pollQuestion
                .question, "", "", "", true, "", 1, 1)

        return question
    }

    fun getOptionsFromPollQuestion(pollQuestion: PollQuestion,
        questionMasterId: Long) : List<Option> {
        var options = mutableListOf<Option>()

        val option1 = Option(0, questionMasterId, pollQuestion.option1, "","",
                "",pollQuestion.isTrueO1)
        options.add(option1)

        val option2 = Option(0, questionMasterId, pollQuestion.option2, "","",
                "",pollQuestion.isTrueO2)
        options.add(option2)

        val option3 = Option(0, questionMasterId, pollQuestion.option3, "","",
                "",pollQuestion.isTrueO3)
        options.add(option3)

        val option4 = Option(0, questionMasterId, pollQuestion.option4, "","",
                "",pollQuestion.isTrueO4)
        options.add(option4)

        return options
    }

    fun findAllQuizMasterDataByPublisherIdAndQuizId(publisherId: Long,
                                                    quizMasterId: Long) :
            QuizMasterAllData {
        //Quiz Master
        val quizMaster : QuizMaster = quizMasterRepository.findById(quizMasterId).get()
        //Questions
        val questions : List<Question> =
                questionMasterRepository.findAllByQuizMasterId(quizMasterId)

        val questionsAllData : List<QuestionAllData> =
        questions.map {
            val options : List<OptionAllData> =
            optionRepository.findAllByQuestionMasterId(it.id).map {
                OptionAllData(it.id,it
                        .questionMasterId,it.optionText,it.isCorrectAnswer)

            }
            QuestionAllData(it.id,it
                    .quizMasterId,it.questionText,options)
        }
        return QuizMasterAllData(quizMaster.id, quizMaster
                .subject, questionsAllData)
    }
}
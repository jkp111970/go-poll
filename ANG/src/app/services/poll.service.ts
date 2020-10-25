import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Poll } from '../view-model/poll';
import { PollDashboard } from '../view-model/poll-dashboard';
import { QuizMasterAllData } from '../view-model/quiz-master-all-data';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  pollQuestionBank : Array<Poll> = new Array();
  private REST_API_SERVER = "http://localhost:8080/publishers/5/polls";

  constructor(private httpClient: HttpClient) { }


  addQuestionToPollBank(poll: Poll) : Array<Poll> {
    let maxId = 0;
    if(this.pollQuestionBank){
      this.pollQuestionBank.forEach((pl : Poll) => {
        if(pl.id > maxId) {
          maxId = pl.id;
        }
      });
    }
    maxId = maxId + 1;
    poll.id = maxId;
    this.pollQuestionBank.push(poll);
    return this.pollQuestionBank;
  }

  createPoll() : void {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept':'*/*'
      })
    };
    this.httpClient.post<Array<Poll>> (this.REST_API_SERVER, 
        JSON.stringify(this.pollQuestionBank), 
        httpOptions
      ).subscribe( response => {
        console.log("Received Success Response........");
      },
      error => {
        console.log("Getting Error Response");
      }
    );
  }

  getPollQuestionBank(): Array<Poll> {
    return this.pollQuestionBank;
  }

  cleanUpQuestionBank(): void {
    this.pollQuestionBank = new Array();
  }

  getAllPollsForPublisher(): Observable<PollDashboard[]> {
    return this.httpClient.get<PollDashboard[]>(this.REST_API_SERVER);
  }

  getAllPollData(pollId: number) : Observable<QuizMasterAllData> {
    let urlForPollAllData = this.REST_API_SERVER + "/" + pollId;
    return this.httpClient.get<QuizMasterAllData>(urlForPollAllData);
  }

  convertPollAllDataForGrid(quizMasterAllData: QuizMasterAllData) : Array<Poll>{
    var pollGridData : Array<Poll> = Array();
    quizMasterAllData.questions.forEach( question => {
      var option1 : string = "";
      var isTrue01: boolean = false;
      var option2 : string = "";
      var isTrue02: boolean = false;
      var option3 : string = "";
      var isTrue03 : boolean = false;
      var option4 : string = "";
      var isTrue04: boolean = false;
      if(question.options != null && question.options.length >= 1){
        option1  = question.options[0].optionText;
        isTrue01 = question.options[0].isCorrectAnswer;
      }
      if(question.options != null && question.options.length >= 2){
        option2  = question.options[1].optionText;
        isTrue02 = question.options[1].isCorrectAnswer;
      }
      if(question.options != null && question.options.length >= 3){
        option3  = question.options[2].optionText;
        isTrue03 = question.options[2].isCorrectAnswer;
      }
      if(question.options != null && question.options.length >= 4){
        option4  = question.options[3].optionText;
        isTrue04 = question.options[3].isCorrectAnswer;
      }
      var poll: Poll = {"id":quizMasterAllData.id , 
          "pollMessage": quizMasterAllData.subject,
          "question": question.questionText,
          "option1": option1,
          "isTrueO1": isTrue01,
          "option2": option2,
          "isTrueO2": isTrue02,
          "option3": option3,
          "isTrueO3": isTrue03,
          "option4": option4,
          "isTrueO4": isTrue04
         };
      pollGridData.push(poll);
    });
    return pollGridData;
  }

}

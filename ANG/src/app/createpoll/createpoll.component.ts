import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Poll } from '../view-model/poll';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'app-createpoll',
  templateUrl: './createpoll.component.html',
  styleUrls: ['./createpoll.component.css']
})
export class CreatepollComponent implements OnInit {

  form : FormGroup;

  pollDefault: Poll = {id: 0, pollMessage: "",question:"",option1 : "",isTrueO1 : false,  option2 : "",isTrueO2 : false,option3 : "",isTrueO3 : false,option4 : "",isTrueO4 : false};
  poll: Poll = Object.assign({},this.pollDefault);
  pollMessage: string = "";
  validationFlag: boolean = true;
  errorMessage: string = null;
  showQuestion : boolean = false;

  gridApi: any;
  columnApi: any;
  column = [
    { "headerName": "Id", "field": "id",resizable: true, width:58 },
    { "headerName": "Question","field": "question",resizable: true },
    { "headerName": "Option1",      "field": "option1"    },
    { "headerName": "Is A Correct?",      "field": "isTrueO1"    },
    { "headerName": "Option2",      "field": "option2"    },
    { "headerName": "Is B Correct?",      "field": "isTrueO2"    },
    { "headerName": "Option3",      "field": "option3"    },
    { "headerName": "Is C Correct?",      "field": "isTrueO3"    },
    { "headerName": "Option4",      "field": "option4"    },
    { "headerName": "Is D Correct?",      "field": "isTrueO4"    }
  ];

  rowData = [
  ];

  onGridReady(params) {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;   
    params.api.sizeColumnsToFit();
  }

  constructor(private pollService : PollService) { }

  ngOnInit(): void {
    this.cleanForm();
  }

  cleanGrid() : void {
    this.pollService.cleanUpQuestionBank();
    this.rowData = [];
    this.gridApi.setRowData(this.rowData);
  }

  cleanForm(): void {
    this.errorMessage = null;
    let group = {};
    group['id'] = new FormControl(this.poll.id);
    group['pollMessage'] = new FormControl(this.pollMessage);
    group['question'] = new FormControl(this.poll.question);
    group['option1'] = new FormControl(this.poll.option1);
    group['isTrueO1'] = new FormControl(this.poll.isTrueO1);
    group['option2'] = new FormControl(this.poll.option2);
    group['isTrueO2'] = new FormControl(this.poll.isTrueO2);
    group['option3'] = new FormControl(this.poll.option3);
    group['isTrueO3'] = new FormControl(this.poll.isTrueO3);
    group['option4'] = new FormControl(this.poll.option4);
    group['isTrueO4'] = new FormControl(this.poll.isTrueO4);
    this.form = new FormGroup(group);
  }

  addQuestionToPoll() : void {
    this.validationFlag = this.form.valid;
    let poll : Poll = this.form.value;
    //let pollCopy = Object.assign({},poll);
    this.pollMessage = poll.pollMessage;
    if(this.validationFlag) {
      this.rowData = this.pollService.addQuestionToPollBank(poll);
      this.gridApi.setRowData(this.rowData);
      this.poll = Object.assign({},this.pollDefault);
      this.toggleQuestionDiv();
    } else {
      this.poll = poll;
    }
    this.cleanForm();
  }

  createPoll() : void {
    let qBank = this.pollService.getPollQuestionBank();
    if(qBank && qBank.length > 0) {
      this.errorMessage = null;
      this.pollService.createPoll();
      this.cleanForm();
      this.cleanGrid();
      alert("Poll Created Successfully");
    } else {
      this.errorMessage = "Request to add atleast 1 Question";
    }
    
  }

  toggleQuestionDiv(): void {
    this.showQuestion=!this.showQuestion;
  }

}

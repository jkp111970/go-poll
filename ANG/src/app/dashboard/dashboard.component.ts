import { Component, OnInit } from '@angular/core';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  errorMessage: String=null;
  gridApi: any;
  columnApi: any;
  column = [
    {"headerName":"Id" , "field":"id",width:58},
    {"headerName":"Poll Message" , "field":"pollMessage"},
    {"headerName":"Created Date" , "field":"createdDate",width:120},
    {"headerName":"Action" , "field":"action",width:70}
  ]
  rowData = [
  ];

  gridApiPollQData: any;
  columnApiPollQData: any;
  columnPollQData=[
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
  rowPollQDataData=[];
  

  constructor(private pollService: PollService) { 

  }

  ngOnInit(): void {
  }

  onGridReady(params) {
    console.log("###### Grid is ready to serve.....");
    this.gridApi = params.api;
    this.columnApi = params.columnApi;   
    params.api.sizeColumnsToFit();
    this.refreshPollDashboardGrid();
  }

  onPollQDataGridReady(params) {
    console.log("###### PollQDataGrid is ready to serve.....");
    this.gridApiPollQData = params.api;
    this.columnApiPollQData = params.columnApi;   
    params.api.sizeColumnsToFit();
    this.refreshPollDashboardGrid();
  }

  refreshPollDashboardGrid() {
    this.pollService.getAllPollsForPublisher().subscribe(
      response => {
        this.rowData = response;
        this.gridApi.setRowData(this.rowData);
      },
      err => {
        this.errorMessage = err;
      }
    );
  }

  onRowClicked(eventRowClick){
    console.log(eventRowClick.data.id);
    this.pollService.getAllPollData(eventRowClick.data.id).subscribe(
      response => {
        this.rowPollQDataData = this.pollService.convertPollAllDataForGrid(response);
        this.gridApiPollQData.setRowData(this.rowPollQDataData);
      }, 
      err => {
        console.log("Failure");
        this.errorMessage = err;
      }
    );
    //refresh second grid TODO
  }






  
}

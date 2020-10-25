import { Component, OnInit } from '@angular/core';

import { FrameworkConfigService } from '../services/framework-config.service';
import { UserApi } from '../services/UserApi';

@Component({
  selector: 'fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent implements OnInit {

  frmConfigService: FrameworkConfigService;

  constructor(private frameworkConfigService : FrameworkConfigService ,
       private userApi : UserApi ) { 
    this.frmConfigService = frameworkConfigService;
  }

  ngOnInit(): void {
  }

  signOut() {
    this.userApi.signOut();
  }

}
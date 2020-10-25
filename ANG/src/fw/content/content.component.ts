import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { ScreenService } from '../services/screen.service';

@Component({
  selector: 'fw-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  menuService : MenuService;
  screenService: ScreenService;

  constructor(private mnService: MenuService,
      private scrService: ScreenService) {
    this.menuService = mnService;
    this.screenService = scrService;
   }

  ngOnInit(): void {
  }

}

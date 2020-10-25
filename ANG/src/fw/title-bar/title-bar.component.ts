import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../services/screen.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'fw-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  screenService : ScreenService;
  menuService : MenuService;

  constructor(private scrnService : ScreenService,
    mnService: MenuService) { 
    this.screenService = scrnService;
    this.menuService = mnService;
  }

  ngOnInit(): void {
  }

}

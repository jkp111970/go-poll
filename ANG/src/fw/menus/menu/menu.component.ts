import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../services/menu.service';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'fw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuService: MenuService;
  screenService: ScreenService;

  constructor(private mnService: MenuService,
    private scrnService: ScreenService) { 
    this.menuService = mnService;
    this.screenService = scrnService;
  }

  ngOnInit(): void {
  }

}

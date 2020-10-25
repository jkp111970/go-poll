import { Component, OnInit, Input } from '@angular/core';

import { MenuService, MenuItem } from '../../services/menu.service';

@Component({
  selector: 'fw-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.css']
})
export class PopupMenuComponent implements OnInit {

  menuService: MenuService;
  
  @Input()
  menu : Array<MenuItem>;

  constructor(private mnService: MenuService) { 
    this.menuService = mnService;
  }

  ngOnInit(): void {
  }

}

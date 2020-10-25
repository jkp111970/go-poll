import { Injectable } from '@angular/core';

export interface MenuItem {
  text: string,
  icon: string,
  route: string,
  submenu: Array<MenuItem>
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  items: Array<MenuItem>;
  isVertical: boolean = true;
  showLeftSideMenu: boolean = false;

  constructor() { }

  toggleLeftSideMenu() {
    this.showLeftSideMenu = !this.showLeftSideMenu;
  }

  toggleMenuOrientation() {
    this.isVertical = !this.isVertical;
  }

}

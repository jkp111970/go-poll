import { Component, OnInit, Input, HostBinding, HostListener, ElementRef } from '@angular/core';
import { MenuItem, MenuService } from 'src/fw/services/menu.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input()
  item: MenuItem;
  menuService: MenuService;
  @HostBinding('class.parent-is-popup')
  @Input()
  parentIsPopup = true;
  isActiveRoute = false;

  mouseInItem = false;
  mouseInPopup = false;
  popupLeft = 0;
  popupTop =34;

  constructor(private router: Router,
    private mnService: MenuService,
    private el: ElementRef) { 
    this.menuService = mnService;
  }

  ngOnInit(): void {
    this.checkActiveRoute(this.router.url);
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.checkActiveRoute(event.url);
      }
    })
  }

  checkActiveRoute(route: string) : void {
    this.isActiveRoute = (route == '/' + this.item.route);
  }

  @HostListener('click',['$event'])
  onClick(event): void {

    event.stopPropagation();

    if(this.item.submenu){
      if(this.menuService.isVertical){
        this.mouseInPopup = !this.mouseInPopup;
      }
    }
    else if(this.item.route){
      let newEvent = new MouseEvent('mouseleave',{bubbles:true});
      //this.renderer.(this.el.nativeElement,'dispatchEvent',[newEvent]);
      this.el.nativeElement.dispatchEvent(newEvent);
      this.router.navigate(['/'+this.item.route]);
    }
  }

  onPopupMouseEnter(event) : void{
    if(!this.menuService.isVertical){
      this.mouseInPopup=true;
    }
  }

  onPopupMouseLeave(event): void{
    if(!this.menuService.isVertical){
      this.mouseInPopup=false;
    }
  }

  @HostListener('mouseleave',['$event'])
  onMouseLeave(event): void {
    if(!this.menuService.isVertical){
      this.mouseInItem=false;
    }
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if(!this.menuService.isVertical){
      if(this.item.submenu){
        this.mouseInItem = true;
        if(this.parentIsPopup){
          this.popupLeft = 160;
          this.popupTop = 0
        }
      }
    }
  }

}

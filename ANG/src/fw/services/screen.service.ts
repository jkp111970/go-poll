import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  private resizeSource = new Subject<null>();
  resize$ = this.resizeSource.asObservable();
  
  largeBreakpoint = 800;
  screenWidth = 1000;
  screenHeight = 800;

  constructor() {
    try {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
      window.addEventListener('resize',(event) => this.onResize(event));
    } catch(e) {
      //do nothing.. go with default size
    }
  }

  isLarge() : boolean {
    return this.screenWidth >= this.largeBreakpoint;
  }

  onResize($event) : void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    /*console.log("### screenWidth:"+this.screenWidth);
    console.log("### screenHeight:"+this.screenHeight);*/
    this.resizeSource.next();
  }

}

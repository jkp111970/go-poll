import { Directive, Input, TemplateRef, ViewContainerRef, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { ScreenService } from '../services/screen.service';

@Directive({selector : '[screenLarge]'})
export class ScreenLarge implements OnDestroy {

    private hasView = false;
    private screenSubscription : Subscription;

    constructor(private screenService : ScreenService, 
        private viewContainer: ViewContainerRef,
        private templateRef : TemplateRef<Object>){
        //console.log('...Directive is created...')
        this.screenSubscription = screenService.resize$.subscribe(() => this.onResize());
        this.screenLarge = false;
    }

    @Input()
    set screenLarge(condition){
        console.log("Screen Large Called....");
        condition = this.screenService.screenWidth >= this.screenService.largeBreakpoint;
        if(condition && !this.hasView){
            this.hasView = true;
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else if(!condition && this.hasView){
            this.hasView = false;
            this.viewContainer.clear();
        }
    }

    onResize() : void {
        this.screenLarge = false;
    }

    ngOnDestroy() {
        this.screenSubscription.unsubscribe();
    }

}
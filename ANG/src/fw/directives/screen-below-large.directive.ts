import { Directive, Input, TemplateRef, ViewContainerRef, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { ScreenService } from '../services/screen.service';

@Directive({selector : '[screenBelowLarge]'})
export class ScreenBelowLarge implements OnDestroy {

    private hasView = false;
    private screenSubscription : Subscription;

    constructor(private screenService : ScreenService, 
        private viewContainer: ViewContainerRef,
        private templateRef : TemplateRef<Object>){
        this.screenSubscription = screenService.resize$.subscribe(() => this.onResize());
        this.screenBelowLarge = false;
    }

    @Input()
    set screenBelowLarge(condition) {
        //console.log("Screen Below Large Called....");
        condition = this.screenService.screenWidth < this.screenService.largeBreakpoint;
        if(condition && !this.hasView){
            this.hasView = true;
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else if(!condition && this.hasView){
            this.hasView = false;
            this.viewContainer.clear();
        }
    }

    onResize() : void {
        this.screenBelowLarge = false;
    }

    ngOnDestroy() {
        this.screenSubscription.unsubscribe();
    }
}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FrameworkBodyComponent } from './framework-body/framework-body.component'
import { ContentComponent } from './content/content.component';
import { TitleBarComponent} from './title-bar/title-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { ScreenLarge } from './directives/screen-large.directive';
import { ScreenBelowLarge } from './directives/screen-below-large.directive';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { PopupMenuComponent } from './menus/popup-menu/popup-menu.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { RegisterComponent } from './users/register/register.component';
import { DynamicFormComponent } from './dynamic-forms/dynamic-form/dynamic-form.component';
import { DynamicFormFieldComponent } from './dynamic-forms/dynamic-form-field/dynamic-form-field.component';

@NgModule({
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    ScreenLarge,
    ScreenBelowLarge,
    MenuComponent,
    MenuItemComponent,
    PopupMenuComponent,
    SignInComponent,
    RegisterComponent,
    DynamicFormComponent,
    DynamicFormFieldComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FrameworkBodyComponent,
    DynamicFormComponent
  ],
  providers : [
  ]
})
export class FwModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { applicationRoutes } from './app.routes';

import { FwModule } from '../fw/fw.module';
import { UserApi } from 'src/fw/services/UserApi';

import { UserServiceApi } from './services/UserServiceApi';

import { CreatepollComponent } from './createpoll/createpoll.component';
import { DefaultComponent } from './default/default.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreatepollComponent,
    DefaultComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FwModule,
    RouterModule.forRoot(applicationRoutes),
    ReactiveFormsModule,
    AgGridModule.withComponents([CreatepollComponent]),
    HttpClientModule
  ],
  providers: [
    UserServiceApi,
    {provide: UserApi, useExisting: UserServiceApi}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CreatepollComponent } from './createpoll/createpoll.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './default/default.component';

export const applicationRoutes: Routes = [
    { path: '', component : DefaultComponent,
        children: [
            { path:'', children:[
                {path: '', redirectTo: 'dashboard', pathMatch:'full'},
                {path: 'createpoll', component : CreatepollComponent},
                {path: 'dashboard', component : DashboardComponent}
             ]
            }
        ]
    },
    {path:'**', component : AppComponent},
];
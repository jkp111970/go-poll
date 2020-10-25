import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {delay} from 'rxjs/internal/operators';

import { UserApi } from '../../fw/services/UserApi';
import { Router } from '@angular/router';


@Injectable()
export class UserServiceApi implements UserApi {

    authenticated: boolean = false;

    constructor(private router:Router){}

    signIn(userName: String, password: String, rememberMe: boolean) : Observable<any> {
        console.log("#### Calling Sign In Rest Service");
        //mygreennation.com/signin.. data..
        //this.authenticatedUserComp.isAuthenticated = true;
        this.authenticated = true;
        
        return of({})
                .pipe(delay(100));
                //.pipe(flatMap(x=> Observable.throw("Invalid UserName and Password")));
                
    }
    
    signOut(): Observable<any> {
        this.authenticated = false;
        this.router.navigate(['/sign-in']);
        return of({});
    }

    isAuthenticated() : boolean {
        return this.authenticated ;
    }
   
}
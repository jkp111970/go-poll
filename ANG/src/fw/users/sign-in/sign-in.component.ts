import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserApi } from '../../services/UserApi';
import { Observable } from 'rxjs';

@Component({
  selector: 'fw-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formError = "";
  submitting : boolean = false;
  
  constructor(private userApi: UserApi, 
    private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(signInForm: NgForm) {
    let dataResponse = (data) => { 
      console.log("Success Response");
      this.router.navigateByUrl("/authenticated"); 
    };

    let errorResponse = (error) => {
      console.log("Error Response from Server");
      let errorMessage = "Invalid Username Or Password";
      
      this.submitting = false;
      this.formError = errorMessage;
    };

    this.submitting=true;
    this.formError= null;

    if(signInForm.valid) {
      let returnValue : Observable<any> = this.userApi.signIn(signInForm.value.username,
        signInForm.value.password, signInForm.value.rememberMe);
      returnValue.subscribe(dataResponse, errorResponse);
    }

  }

}

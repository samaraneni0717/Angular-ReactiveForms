import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector:'app-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit{
    ngOnInit(): void {
        //this.loginForm.get('userName').valueChanges.subscribe(data =>   console.log('the form values are',data))
      
    }
  
    constructor(private fb:FormBuilder){}
   

    loginForm = this.fb.group({
        // need to pattern validator
        userName: ['',[Validators.required,Validators.maxLength(30), Validators.max(25), Validators.min(3)]],
        password:['',[Validators.required,Validators.maxLength(30), Validators.minLength(3)]]
    });

    onSubmit(){
        console.warn("The login form is", this.loginForm.value)
    }
}
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  sampleUserData=[
    {
      email:'tejas@example.com',
      password:'password123'
    },
    {
      email:'computer@example.com',
      password:'computer123'
    },
    {
      email:'sebastian@example.com',
      password:'sebastian123'
    }
  ]
  login= new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)])
  })
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
      console.log(this.login.value);
      if(this.login.valid){
          const searchIndex=this.sampleUserData.findIndex((userElement:any)=> userElement.email === this.login.value.email && userElement.password=== this.login.value.password);
          if(searchIndex>-1){
            this.router.navigate(['/dashboard']);
          }else{
            alert('Email or Password does not match with any account');
          }
        //1. Check if email & password match
        //2. Router to dashboard component
      }

  }

}

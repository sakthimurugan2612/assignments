import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user:string;
password:string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    
    sessionStorage.setItem('userId',this.user);
    sessionStorage.setItem('password',this.password);
     this.router.navigate(['junc']);
  }

}

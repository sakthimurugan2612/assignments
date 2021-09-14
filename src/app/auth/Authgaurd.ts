import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";


@Injectable({providedIn:'root'})
export default class AuthGuard implements CanActivate {
    constructor(private router: Router){}
    canActivate() {
      console.log("AlwaysAuthGuard");
      console.log(sessionStorage.getItem('userId'));
       if(!sessionStorage.getItem('userId')) {
             this.router.navigate(['sign']);
       }
     
      return true;
    }
  }
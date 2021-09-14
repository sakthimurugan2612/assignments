import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {JuncComponent } from './junc/junc.component';
import { SpecsComponent } from './specs/specs.component';
import { SignupComponent } from './signup/signup.component';
import AuthGuard from './auth/Authgaurd';


const appRoutes:Routes = [



{path:'spec/:id', component: SpecsComponent ,canActivate: [AuthGuard] },
{path:'junc', component: JuncComponent ,canActivate: [AuthGuard] },
{path:'specs', component: SpecsComponent ,canActivate: [AuthGuard] },
{path:'', component:  SignupComponent},

];



@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

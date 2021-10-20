import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {JuncComponent } from './junc/junc.component';
import { SpecsComponent } from './specs/specs.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import AuthGuard from './auth/Authgaurd';
import { FormComponent } from './form/form.component';


import { PhoneComponent } from './phone/phone.component';
import { DataComponent } from './data/data.component';


const appRoutes:Routes = [



{path:'spec/:id', component: SpecsComponent ,canActivate: [AuthGuard] },
{path:'junc', component: JuncComponent ,canActivate: [AuthGuard] },
{path:'specs', component: SpecsComponent ,canActivate: [AuthGuard] },
{path:'', component:  SignupComponent},
{path:'contact', component:  ContactComponent},
{path:'form', component:  FormComponent},
{path:'edits/:Name', component: FormComponent },

{path:'phone', component:  PhoneComponent},
{path:'data', component:  DataComponent},
{path:'show/:name', component: DataComponent },

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

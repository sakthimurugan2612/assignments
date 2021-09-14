import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule, } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { JuncComponent } from './junc/junc.component';
import { SpecsComponent } from './specs/specs.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import AuthGuard from './auth/Authgaurd';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    JuncComponent,
    SpecsComponent,
    SignupComponent,  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

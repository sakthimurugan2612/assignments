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
import { ContactComponent } from './contact/contact.component';
import { AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { FormComponent } from './form/form.component';
import { PhoneComponent } from './phone/phone.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    JuncComponent,
    SpecsComponent,
    SignupComponent,
    ContactComponent,
    FormComponent,
    PhoneComponent,
    DataComponent,  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),   
    AngularFirestoreModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthGuard,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }

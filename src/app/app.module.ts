import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule, } from '@angular/forms';


import { AppComponent } from './app.component';



import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ScrumComponent } from './scrum/scrum.component';
import { AppRoutingModule } from './app-routing.module';
import { ManagepostsComponent } from './manageposts/manageposts.component';
import { NewComponent } from './new/new.component';
import { environment } from 'src/environments/environment';
import { AngularFirestore, AngularFirestoreModule  } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ScrumComponent,
    ManagepostsComponent,
    NewComponent,  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),   
    AngularFirestoreModule,
    ReactiveFormsModule,
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }

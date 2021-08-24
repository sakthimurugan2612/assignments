import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import{ManagepostsComponent} from './manageposts/manageposts.component';  
import { NewComponent } from './new/new.component';

const appRoutes:Routes = [
  {path:'', component: HomeComponent },
{path:'manageposts', component: ManagepostsComponent },
{path:'new', component: NewComponent },
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { SprintComponent } from './sprint/sprint.component';
import {ProfileComponent} from './profile/profile.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { LoginComponent } from './login/login.component';

const routes: Route[]= [
  {path:'sprint',component:SprintComponent,
children:[
  {path:'issue', component:CreateIssueComponent}
  
]},
  {path:'profile', component: ProfileComponent},
  {path:'login', component:LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

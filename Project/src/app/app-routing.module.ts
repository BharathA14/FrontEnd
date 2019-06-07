import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { SprintComponent } from './sprint/sprint.component';
import {ProfileComponent} from './profile/profile.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';

const routes: Route[]= [
  {path:'sprint',component:SprintComponent,
children:[
  {path:'issue', component:CreateIssueComponent}
  
]},
  {path:'profile', component: ProfileComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

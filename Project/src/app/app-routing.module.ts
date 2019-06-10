import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { SprintComponent } from './sprint/sprint.component';
import {ProfileComponent} from './profile/profile.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { LoginComponent } from './login/login.component';
import { IssuesComponent } from './issues/issues.component';
import { TeamissueComponent } from './teamissue/teamissue.component';

const routes: Route[]= [
  {path:'sprint',component:SprintComponent,
children:[
  {path:'issue', component:CreateIssueComponent}
  
]},
  {path:'issues',component:IssuesComponent},
  {path:'teamissue',component:TeamissueComponent},
  {path:'profile', component: ProfileComponent},
  {path:'login', component:LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

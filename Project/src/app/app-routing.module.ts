import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { SprintComponent } from './sprint/sprint.component';


const routes: Route[]= [
  {path:'sprint',component:SprintComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

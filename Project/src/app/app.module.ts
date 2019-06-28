import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SprintComponent } from './sprint/sprint.component';
import { ProfileComponent } from './profile/profile.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IssueComponent } from './issue/issue.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SprintComponent,
    ProfileComponent,
    CreateIssueComponent,
    LoginComponent,
    IssueComponent,
    CardComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        component:LoginComponent
      },
      {
        path:'sprint',
        component:SprintComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'issue-details',
        component:IssueComponent
      },
     
      
      
    ])
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents:[
    CreateIssueComponent
  ]
})
export class AppModule { }

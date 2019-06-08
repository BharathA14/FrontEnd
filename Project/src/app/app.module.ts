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

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SprintComponent,
    ProfileComponent,
    CreateIssueComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents:[
    CreateIssueComponent
  ]
})
export class AppModule { }

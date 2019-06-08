import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name:string="Your Name";
  usernmae:string;
  password:string;
  nationality:string;
  projects: string;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  days:number=4;
  sprintlist:any=[11.1,10,9.2,9.1,9]
  sprint:number=12;

  constructor() { }
  selectsprint(sprints:number){
    this.sprint=sprints;

  }

  ngOnInit() {
  }

}

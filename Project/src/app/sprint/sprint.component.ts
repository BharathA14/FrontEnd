import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal}  from '@ng-bootstrap/ng-bootstrap';
import { CreateIssueComponent } from '../create-issue/create-issue.component';
@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.css']
})
export class SprintComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(){
    const modalRef = this.modalService.open(CreateIssueComponent);
    modalRef.componentInstance.title= 'issue_modal';
  }

}

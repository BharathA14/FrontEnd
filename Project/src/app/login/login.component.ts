import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname:string;
  psw:string;
  user:string;
  pass:string;
  dbuser:string='ajay';
  dbpass:string='1610';
  userid:string;
  credentials:boolean=false;
  submit:boolean=false;


  constructor() { }
  onsubmit(){
    if(this.uname=='' || this.psw==''){
      window.alert("Fill all the required fields");
      this.submit=false;
    }
    else{
    this.user=this.uname;
    this.pass=this.psw;
    this.submit=true;

    }
    if(this.user==this.dbuser && this.pass==this.dbpass){
      this.credentials=true;
    }
    else{
      this.credentials=false;
    }
  }
  onreset(){
    this.uname='';
    this.psw='';
    this.submit=false;
  }


  ngOnInit() {
  }

}

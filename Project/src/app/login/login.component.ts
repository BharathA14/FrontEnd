import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
// import { FormsModule } from '@angular/forms';

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
  dbpass:string='ajay';
  userid:string;
  result:any;
  credentials:boolean=false;
  submit:boolean=false;


  constructor(private http:HttpserviceService) { }
  onsubmit(){
    this.http.update().subscribe((data)=>{
    this.result=data["name"];
    console.log(this.result);})
    
  }  
      

  
  onreset(){
    this.uname='';
    this.psw='';
    this.submit=false;
  }



  ngOnInit() {
  }

}

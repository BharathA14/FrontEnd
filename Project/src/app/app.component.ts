import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string;
  constructor( ){
    setInterval(()=>{
    let date =new Date();
    this.title= date.toDateString()+ '   '+ date.toLocaleTimeString();
    },1000)
  }
}

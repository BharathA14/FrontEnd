import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {


  constructor(private http:HttpClient) { }

  update(){
    return this.http.patch("https://reqres.in/api/users/2",
    {
      "name": "james",
      "job": "resident"
  }
    
    )


  }
 
    
  }


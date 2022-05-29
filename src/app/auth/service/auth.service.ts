import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  private apiURL = 'https://homa-blog.azurewebsites.net/';

  registerUser(body: any){
    return this.http.post(this.apiURL + 'reqister', JSON.stringify({
      email: body.email,
      password: body.password,
      displayName: body.name
    }), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  loginUser(body: any){
    return this.http.post(this.apiURL + 'login', JSON.stringify({
      email: body.email,
      password: body.password
    }), {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).pipe(map((data) => {
      return JSON.stringify(data);
    }))
  }
}
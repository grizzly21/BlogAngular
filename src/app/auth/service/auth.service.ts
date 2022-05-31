import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/app/common/api-url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }


  registerUser(body: any){
    return this.http.post(apiUrl + 'reqister', JSON.stringify({
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
    return this.http.post(apiUrl + 'login', JSON.stringify({
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
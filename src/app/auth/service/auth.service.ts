import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  private apiURL = 'https://homa-blog.azurewebsites.net/';

  registerUser(body: any){
    return this.http.post('https://homa-blog.azurewebsites.net/reqister', JSON.stringify({
      email: body.email,
      password: body.password,
      displayName: body.name
    }), {
      headers: {
        'Authorization': 'string',
        'Content-Type': 'application/json'
      }
    })
  }

  loginUser(body: any){
    return this.http.post(this.apiURL + 'login', JSON.stringify(body))
  }
}

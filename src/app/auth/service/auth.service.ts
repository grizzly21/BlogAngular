import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  private apiURL = 'https://homa-blog.azurewebsites.net/swagger/';

  registerUser(body: any){
    return this.http.post(this.apiURL + 'register', JSON.stringify(body))
  }

  loginUser(body: any){
    return this.http.post(this.apiURL + 'login', JSON.stringify(body))
  }
}

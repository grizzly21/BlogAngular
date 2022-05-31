import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../api-url';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  constructor(private http: HttpClient) {}

  getAllStories(){
    return this.http.get(apiUrl + 'posts', {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { apiUrl } from '../api-url';
import { IStory } from '../interfaces/story.interface';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  constructor(private http: HttpClient) {}

  getAllStories(): Observable<IStory[]>{
    return this.http.get<IStory[]>(apiUrl + 'posts')
  }
}

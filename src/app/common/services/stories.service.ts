import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../api-url';
import { IStory } from '../interfaces/story.interface';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  constructor(private http: HttpClient) {}

  getAllStories(): Observable<IStory[]> {
    return this.http.get<IStory[]>(apiUrl + 'posts');
  }

  getStoriesById(storyId: string): Observable<IStory> {
    return this.http.get<IStory>(`${apiUrl}posts/${storyId}`)
  }

  like(storyId: string) {
    return this.http.post(`${apiUrl}posts/${storyId}/like`, null);
  }

  unlike(storyId: string) {
    return this.http.post(`${apiUrl}posts/${storyId}/unlike`, null);
  }

  uploadAvatar(uploadData: FormData){
    return this.http.post(`${apiUrl}posts/updateAvatar`, uploadData);
  }

  getUserInfo(): Observable<IUser>{
    return this.http.get<IUser>(`${apiUrl}user/info`);
  }
}

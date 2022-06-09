import { Component, OnInit } from '@angular/core';
import { IStory } from 'src/app/common/interfaces/story.interface';
import { StoriesService } from 'src/app/common/services/stories.service';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss'],
})
export class TopStoriesComponent implements OnInit {
  constructor(private storiesService: StoriesService) {}

  allStories: IStory[] = [];

  ngOnInit(): void {
    this.storiesService.getAllStories().subscribe(
      (response) => {
        this.allStories = response;
        console.log(this.allStories)
      },
      (err) => {
        console.log(err);
      }
    );
  }
  likeOrUnlikeStory(id: string, isLiked: boolean){
    if(!isLiked){
      this.storiesService.like(id).subscribe(
        (next) => {
          console.log(next)
        },
        (err) => {
          console.log(err)
        }
      )
    }else{
      this.storiesService.unlike(id).subscribe(
        (next) => {
          console.log(next)
        },
        (err) => {
          console.log(err)
        }
      )
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiUrl } from 'src/app/common/api-url';
import { IStory } from 'src/app/common/interfaces/story.interface';
import { StoriesService } from 'src/app/common/services/stories.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit{

  id!: string;
  story!: IStory;
  apiUrl: string = apiUrl;

  constructor(
    private activateRoute: ActivatedRoute,
    private storiesService: StoriesService
    ) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.storiesService.getStoriesById(this.id).subscribe(
      (next) => {
        this.story = next;
      },
      (err) => {
        console.log(err);
        alert('Something went wrong...')
      }
    )
  }

}

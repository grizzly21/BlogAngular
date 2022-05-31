import { Component, OnInit } from '@angular/core';
import { StoriesService } from 'src/app/common/services/stories.service';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss']
})
export class TopStoriesComponent implements OnInit {

  constructor(
    private storiesService: StoriesService
  ) { }

  ngOnInit(): void {
    this.storiesService.getAllStories().subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (err) =>{
        console.log(err)
      }
    })
  }

}

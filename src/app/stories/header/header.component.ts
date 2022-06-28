import { Component, OnInit } from '@angular/core';
import { apiUrl } from 'src/app/common/api-url';
import { StoriesService } from 'src/app/common/services/stories.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  apiUrl: string = apiUrl;
  userAvatarUrl!: string;

  constructor(private storiesService: StoriesService) { }

  ngOnInit() {
    this.storiesService.getUserInfo().subscribe(
      (next) => {
        this.userAvatarUrl = next.avatarUrl;
      },
      (err) => {
        alert('Something went wrong...');
      }
    )
  }

}

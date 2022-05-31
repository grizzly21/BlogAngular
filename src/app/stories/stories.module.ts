import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainStoriesComponent } from './main-stories/main-stories.component';
import { HeaderComponent } from './header/header.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { StoryComponent } from './story/story.component';
import { AddStoryComponent } from './add-story/add-story.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule } from '@angular/router';
import { StoriesService } from '../common/services/stories.service';

@NgModule({
  declarations: [
    MainStoriesComponent,
    HeaderComponent,
    TopStoriesComponent,
    StoryComponent,
    AddStoryComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [StoriesService]
})
export class StoriesModule {}

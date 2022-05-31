import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddStoryComponent } from "./add-story/add-story.component";
import { StoryComponent } from "./story/story.component";
import { TopStoriesComponent } from "./top-stories/top-stories.component";

export const storiesRoutes: Routes = [
  {path: '', component: TopStoriesComponent},
  {path: 'story/:id', component: StoryComponent},
  {path: 'add-stories', component: AddStoryComponent},
]

@NgModule({
  imports: [RouterModule.forChild(storiesRoutes)],
  exports: [RouterModule]
})
export class StoriesRoutingModule{}
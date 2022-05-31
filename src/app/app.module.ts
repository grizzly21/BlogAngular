import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { TopStoriesComponent } from './stories/top-stories/top-stories.component';
import { StoryComponent } from './stories/story/story.component';
import { StoriesModule } from './stories/stories.module';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, StoriesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

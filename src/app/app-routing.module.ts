import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./auth/register/register.component";
import {LoginComponent} from "./auth/login/login.component";
import { TopStoriesComponent } from './stories/top-stories/top-stories.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: '', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'top-stories', component: TopStoriesComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

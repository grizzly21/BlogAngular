import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { MainStoriesComponent } from './stories/main-stories/main-stories.component';
import { storiesRoutes } from './stories/stories-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'stories', pathMatch: "full"},
  {
    path: 'stories',
    component: MainStoriesComponent,
    canActivate: [AuthGuard],
    children: storiesRoutes
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

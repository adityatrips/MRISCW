import { FofComponent } from './pages/fof/fof.component';
import { TeamComponent } from './pages/team/team.component';
import { RegisterCloudQuizComponent } from './pages/register-cloud-quiz/register-cloud-quiz.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'register/cloud-quiz',
    component: RegisterCloudQuizComponent,
  },
  {
    path: 'team',
    component: TeamComponent,
  },
  {
    path: '**',
    component: FofComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

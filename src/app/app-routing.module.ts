import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProjectDetailsComponent } from './components';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'project-details/:id', component: ProjectDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

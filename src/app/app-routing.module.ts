import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { MainComponent } from './main/main.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'projects', component: ProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

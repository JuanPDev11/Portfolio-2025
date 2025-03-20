import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { InfoProjectComponent } from './components/info-project/info-project.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'JuanLucumi',
    component: HomeComponent
  },
  {
    path:'skills',
    component: SkillsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

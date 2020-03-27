import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourceAddComponent} from './components/resource-add/resource-add.component';
import { ResourceEditComponent } from './components/resource-edit/resource-edit.component';
import { ResourceGetComponent } from './components/resource-get/resource-get.component';
import { SkillsAddComponent} from './components/skills-add/skills-add.component';
import { SkillsGetComponent } from './components/skills-get/skills-get.component';

const routes: Routes = [
  {
    path: 'resource/create',
    component: ResourceAddComponent
  },
  {
    path: 'resource/edit/:id',
    component: ResourceEditComponent
  },
  {
    path: 'resources',
    component: ResourceGetComponent
  },
  {
    path: 'skill/create',
    component: SkillsAddComponent
  },
  {
    path: 'skills',
    component: SkillsGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



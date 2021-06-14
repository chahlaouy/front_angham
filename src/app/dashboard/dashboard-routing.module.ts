import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormerComponent } from './former/former.component';
import { TrainingComponent } from './training/training.component';
import { MemberComponent } from './member/member.component';
import { StartUpComponent } from './start-up/start-up.component';
import { StructureAppuiComponent } from './structure-appui/structure-appui.component';


import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'formateur',
    component: FormerComponent
  },
  {
    path: 'member',
    component: MemberComponent
  },
  {
    path: 'formation',
    component: TrainingComponent
  }, 
  {
    path: 'start-up',
    component: StartUpComponent
  }, 
  {
    path: 'structure-appui',
    component: StructureAppuiComponent
  }, 
  
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }

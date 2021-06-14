import { NgModule, /** ADD THIS -> **/ CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module'
import { AngularMaterialModule } from '../angular-material/angular-material.module'
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormerComponent } from './former/former.component';
import { TrainingComponent } from './training/training.component';
import { MemberComponent } from './member/member.component';
import { StartUpComponent } from './start-up/start-up.component';
import { StructureAppuiComponent } from './structure-appui/structure-appui.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    FormerComponent,
    TrainingComponent,
    MemberComponent,
    StartUpComponent,
    StructureAppuiComponent,

  
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    HttpClientModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }

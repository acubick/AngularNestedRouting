import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {TestcComponent} from './testc/testc.component';
import {TestbComponent} from './testb/testb.component';
import {TestaComponent} from './testa/testa.component';


@NgModule({
  declarations: [
    TestaComponent,
    TestbComponent,
    TestcComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestbRoutingModule } from './testb-routing.module';
import {OneComponent} from './one/one.component';
import {SecondComponent} from './second/second.component';
import {ThreeComponent} from './three/three.component';


@NgModule({
  declarations: [
    OneComponent,
    SecondComponent,
    ThreeComponent
  ],
  imports: [
    CommonModule,
    TestbRoutingModule
  ]
})
export class TestbModule { }

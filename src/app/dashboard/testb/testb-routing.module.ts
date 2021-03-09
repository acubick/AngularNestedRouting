import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TestbComponent} from './testb.component';
import {OneComponent} from './one/one.component';
import {SecondComponent} from './second/second.component';
import {ThreeComponent} from './three/three.component';
import {Page404Component} from '../../page404/page404.component';


const routes: Routes = [
  // {
  //   path: '', component: TestbComponent, children: [
  //
  //     {
  //       path: 'one', component: OneComponent
  //     },
  //     {
  //       path: 'second', component: SecondComponent
  //     },
  //     {
  //       path: 'three', component: ThreeComponent
  //     },
  //     {
  //       path: '', redirectTo: 'one', pathMatch: 'full'
  //     },
  //     { path: '**', component:  Page404Component}
  //     // { path: '**', component: Page404Component  }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestbRoutingModule { }

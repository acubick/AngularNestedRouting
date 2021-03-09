import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {DashboardComponent} from './dashboard.component';
import {TestaComponent} from './testa/testa.component';
import {TestcComponent} from './testc/testc.component';
import {Page404Component} from '../page404/page404.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {
        path: 'testa', component: TestaComponent
      },
      { path: 'testb', loadChildren: () => import(`./testb/testb.module`).then(m => m.TestbModule) },
      {
        path: 'testc', component: TestcComponent
      },
      {
        path: '', redirectTo: 'tetsa', pathMatch: 'full'
      },

      { path: '**', component: Page404Component  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

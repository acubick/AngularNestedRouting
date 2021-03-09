//app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { Page404Component } from './page404/page404.component';
import { TestaComponent } from './dashboard/testa/testa.component';
import { TestbComponent } from './dashboard/testb/testb.component';
import { TestcComponent } from './dashboard/testc/testc.component';
import { OneComponent } from './dashboard/testb/one/one.component';
import { SecondComponent } from './dashboard/testb/second/second.component';
import { ThreeComponent } from './dashboard/testb/three/three.component';
import { TestdComponent } from './profile/testd/testd.component';
import { TesteComponent } from './profile/teste/teste.component';
import { TestfComponent } from './profile/testf/testf.component';
import { FourComponent } from './profile/testd/four/four.component';
import { FiveComponent } from './profile/testd/five/five.component';
import { SixComponent } from './profile/testd/six/six.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    AttendanceComponent,
    Page404Component,
    // TestaComponent,
    // TestbComponent,
    // TestcComponent,
    // OneComponent,
    // SecondComponent,
    // ThreeComponent,
    // TestdComponent,
    // TesteComponent,
    // TestfComponent,
    // FourComponent,
    // FiveComponent,
    // SixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


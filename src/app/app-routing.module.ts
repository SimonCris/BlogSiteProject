import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppRoutingConstants} from "./app-routingConstants";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  { path: '', redirectTo: AppRoutingConstants.fullPath('home'), pathMatch: 'full' },
  { path: AppRoutingConstants.fullPath('home'), component: HomeComponent}, // canActivate: [AuthGuard] },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

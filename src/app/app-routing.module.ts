import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AppRoutingConstants} from "./app-routingConstants";

const routes: Routes = [
  { path: '', redirectTo: AppRoutingConstants.fullPath('home'), pathMatch: 'full' },
  { path: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateHome), component: HomeComponent}, //, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

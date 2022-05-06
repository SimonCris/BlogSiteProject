import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppRoutingConstants} from "./app-routingConstants";
import {HomeComponent} from "./components/home/home.component";
import {WhoIAmComponent} from "./components/about-me/components/who-i-am/who-i-am.component";
import {TellAboutMeComponent} from "./components/about-me/components/tell-about-me/tell-about-me.component";

const routes: Routes = [
  { path: '', redirectTo: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateHome), pathMatch: 'full' },
  { path: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateHome), component: HomeComponent}, // canActivate: [AuthGuard] },
  { path: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateWhoIAm), component: WhoIAmComponent},
  { path: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateTellAboutMe), component: TellAboutMeComponent},
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

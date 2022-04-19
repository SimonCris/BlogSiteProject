import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

/**const routes: Routes = [
  { path: '', redirectTo: AppRoutingConstants.fullPath('home'), pathMatch: 'full' },
  { path: AppRoutingConstants.fullPath('home'), component: HomeComponent, canActivate: [AuthGuard] },
  { path: AppRoutingConstants.fullPath('login'), component: LoginComponent },
  { path: AppRoutingConstants.fullPath('register'), component: RegisterComponent, canActivate: [AuthGuard] },
  { path: AppRoutingConstants.fullPath('forgot_password'), component: ForgotPasswordComponent, canActivate: [AuthGuard] },
  { path: AppRoutingConstants.fullPath('verify_email'), component: VerifyEmailComponent, canActivate: [AuthGuard] },
  { path: AppRoutingConstants.fullPath('target_detail'), component: TargetDetailComponent, canActivate: [AuthGuard] },
  { path: AppRoutingConstants.fullPath('dossier_detail'), component: DossierDetailsComponent, canActivate: [AuthGuard] },
  { path: AppRoutingConstants.fullPath('documents'), component: DocumentsComponent, canActivate: [AuthGuard] },
  { path: AppRoutingConstants.fullPath('documents_detail'), component: DocumentsDetailsComponent, canActivate: [AuthGuard] },
  { path: AppRoutingConstants.fullPath('dossier'), component: DossierListComponent, canActivate: [AuthGuard] },
  { path: AppRoutingConstants.fullPath('archive'), component: ArchiveComponent, canActivate: [AuthGuard] },
  { path: AppRoutingConstants.fullPath('teams'), component: TeamsComponent, canActivate: [AuthGuard] },
];*/

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

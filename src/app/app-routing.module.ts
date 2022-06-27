import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppRoutingConstants} from "./app-routingConstants";
import {HomeComponent} from "./components/home/home.component";
import {WhoIAmComponent} from "./components/about-me/components/who-i-am/who-i-am.component";
import {TellAboutMeComponent} from "./components/about-me/components/tell-about-me/tell-about-me.component";
import {ContactsComponent} from "./components/contacts/contacts.component";
import {ArmocromiaComponent} from "./components/works/components/armocromia/armocromia.component";
import {WeddingComponent} from "./components/works/components/wedding/wedding.component";
import {LookChangeComponent} from "./components/works/components/look-change/look-change.component";
import {FaceShapesComponent} from "./components/works/components/face-shapes/face-shapes.component";
import {BodyShapesComponent} from "./components/works/components/body-shapes/body-shapes.component";
import {MakeupPaletteComponent} from "./components/makeup-palette/makeup-palette.component";
import {ArticlesComponent} from "./components/blog/components/articles/articles.component";
import {PhotosComponent} from "./components/blog/components/photos/photos.component";
import {VideosComponent} from "./components/blog/components/videos/videos.component";
import {QualificationsComponent} from "./components/qualifications/qualifications.component";
import {ServicesListComponent} from "./components/services-list/services-list.component";
import {BlogMainComponent} from "./components/blog/components/blog-main/blog-main.component";
import {ImageConsultingComponent} from "./components/services-list/components/image-consulting/image-consulting.component";
import {ShoppingComponent} from "./components/services-list/components/shopping/shopping.component";
import {StyleAnalysisComponent} from "./components/services-list/components/style-analysis/style-analysis.component";
import {WorksComponent} from "./components/works/components/works/works.component";

const routes: Routes = [
  { path: '', redirectTo: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateHome), pathMatch: 'full' },
  { path: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateHome), component: HomeComponent}, // canActivate: [AuthGuard] },
  { path: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateWhoIAm), component: WhoIAmComponent},
  { path: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateTellAboutMe), component: TellAboutMeComponent},
  { path: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateWorks), component: WorksComponent},
  { path: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateArmocromia), component: ArmocromiaComponent},
  { path: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateWedding), component: WeddingComponent},
  { path: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateLookChange), component: LookChangeComponent},
  { path: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateFaceShapes), component: FaceShapesComponent},
  { path: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateBodyShapes), component: BodyShapesComponent},
  { path: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateMakeUpInPalette), component: MakeupPaletteComponent},
  { path: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateBlogArticles), component: ArticlesComponent},
  { path: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateBlog), component: BlogMainComponent},
  { path: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateBlogPhotos), component: PhotosComponent},
  { path: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateBlogVideos), component: VideosComponent},
  { path: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateQualifications), component: QualificationsComponent},
  { path: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateServicesList), component: ServicesListComponent},
  { path: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateServicesListImageConsulting), component: ImageConsultingComponent},
  { path: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateServicesListShopping), component: ShoppingComponent},
  { path: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateServicesListStyleAnalysis), component: StyleAnalysisComponent},
  { path: AppRoutingConstants.fullPath(AppRoutingConstants.masksState.stateContacts), component: ContactsComponent},
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

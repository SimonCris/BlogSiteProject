import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { HomeComponent } from './components/home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import { NavMenuComponent } from './components/shared/components/nav-menu/nav-menu.component';
import { HeaderComponent } from './components/shared/components/header/header.component';
import { MainSectionsComponent } from './components/home/components/main-sections/main-sections.component';
import { AboutMeHomeComponent } from './components/home/components/about-me-home/about-me-home.component';
import { DividerComponent } from './components/shared/components/divider/divider.component';
import { QualificationHomeComponent } from './components/home/components/qualification-home/qualification-home.component';
import { FooterComponent } from './components/shared/components/footer/footer.component';
import { MediaHomeComponent } from './components/home/components/media-home/media-home.component';
import { ScrollToTopComponent } from './components/shared/components/scroll-to-top/scroll-to-top.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {environment} from "../environments/environment";
import { SpinnerComponent } from './components/shared/components/spinner/spinner.component';
import {AppSettings} from "./AppSettings";
import {ToastrModule} from "ngx-toastr";
import {NgxSpinnerModule} from "ngx-spinner";
import { WhoIAmComponent } from './components/about-me/components/who-i-am/who-i-am.component';
import { TellAboutMeComponent } from './components/about-me/components/tell-about-me/tell-about-me.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ArmocromiaComponent } from './components/works/components/armocromia/armocromia.component';
import { WeddingComponent } from './components/works/components/wedding/wedding.component';
import { LookChangeComponent } from './components/works/components/look-change/look-change.component';
import { FaceShapesComponent } from './components/works/components/face-shapes/face-shapes.component';
import { BodyShapesComponent } from './components/works/components/body-shapes/body-shapes.component';
import { MakeupPaletteComponent } from './components/makeup-palette/makeup-palette.component';
import { QualificationsComponent } from './components/qualifications/qualifications.component';
import { PhotosComponent } from './components/blog/components/photos/photos.component';
import { VideosComponent } from './components/blog/components/videos/videos.component';
import { ArticlesComponent } from './components/blog/components/articles/articles.component';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { BlogMainComponent } from './components/blog/components/blog-main/blog-main.component';
import {VgCoreModule} from "ngx-videogular";
import { StyleAnalysisComponent } from './components/services-list/components/style-analysis/style-analysis.component';
import { ShoppingComponent } from './components/services-list/components/shopping/shopping.component';
import { ImageConsultingComponent } from './components/services-list/components/image-consulting/image-consulting.component';
import { WorksComponent } from './components/works/components/works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    HeaderComponent,
    MainSectionsComponent,
    AboutMeHomeComponent,
    DividerComponent,
    QualificationHomeComponent,
    FooterComponent,
    MediaHomeComponent,
    ScrollToTopComponent,
    SpinnerComponent,
    WhoIAmComponent,
    TellAboutMeComponent,
    ContactsComponent,
    ArmocromiaComponent,
    WeddingComponent,
    LookChangeComponent,
    FaceShapesComponent,
    BodyShapesComponent,
    MakeupPaletteComponent,
    QualificationsComponent,
    PhotosComponent,
    VideosComponent,
    ArticlesComponent,
    ServicesListComponent,
    BlogMainComponent,
    StyleAnalysisComponent,
    ShoppingComponent,
    ImageConsultingComponent,
    WorksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // ngx-translate and the loader module
    HttpClientModule,
    NgxSpinnerModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: AppSettings.NOTIFICATION_MESSAGE_TIME,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true,
      closeButton: true
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    VgCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

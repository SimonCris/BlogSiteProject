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
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // ngx-translate and the loader module
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

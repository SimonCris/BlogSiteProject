import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { MainMenuComponent } from './components/home/components/main-menu/main-menu.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { ToolbarMenuComponent } from './components/home/components/main-menu/toolbar-menu/toolbar-menu.component';
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";

const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainMenuComponent,
    ToolbarMenuComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ...materialModules
  ],
  exports: [
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

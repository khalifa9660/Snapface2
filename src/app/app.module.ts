import { BrowserModule} from '@angular/platform-browser';
import { NgModule, LOCALE_ID  } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import * as fr from '@angular/common/locales/fr'
import { AppComponent } from './app.component';
import { SnapFaceComponent } from './snap-face/snap-face.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing-module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleSnapFaceComponent } from './single-snap-face/single-snap-face.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    SnapFaceComponent,
    FaceSnapListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleSnapFaceComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    registerLocaleData(fr.default);
  }
 }

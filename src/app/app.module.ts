import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FacebookModule } from 'ngx-facebook';
import { FacebookService, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar/navbar.component';
import { FaceBarComponent} from './Components/Facebook_Bar/face-bar/face-bar.component';
import { Navbar2Component } from './Components/navbar/navbar2/navbar2.component';
import { GreetingsComponent } from './Components/Intmessage/greetings/greetings.component';
import { BanerPresencialCComponent } from './Components/Presen_Bar/baner-presencial-c/baner-presencial-c.component';
import { FooterSalemComponent } from './Components/Footer/footer-salem/footer-salem.component';
import { SalemKidsBannerComponent } from './Components/SalemK_Bar/salem-kids-banner/salem-kids-banner.component';
import { SlideMemuComponent } from './Components/slide-memu/slide-memu.component';
import { HorariosCultosComponent } from './Components/menu_opt/horarios-cultos/horarios-cultos.component';
import { TransmiComponent } from './Components/menu_opt/transmi/transmi.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { ConocenosComponent } from './Components/conocenos/conocenos.component';
import { SafeUrlPipe } from './Pipes/safe-url.pipe';
import { DonativosComponent } from './Components/donativos/donativos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FaceBarComponent,
    Navbar2Component,
    GreetingsComponent,
    BanerPresencialCComponent,
    FooterSalemComponent,
    SalemKidsBannerComponent,
    SlideMemuComponent,
    HorariosCultosComponent,
    TransmiComponent,
    MainPageComponent,
    ConocenosComponent,
    SafeUrlPipe,
    DonativosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FacebookModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }

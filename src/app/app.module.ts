import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Liste1Page } from '../pages/liste1/liste1';
import { Liste2Page } from '../pages/liste2/liste2';
import { Liste3Page } from '../pages/liste3/liste3';
import { Liste4Page } from '../pages/liste4/liste4';
import { Intro } from '../pages/intro/intro';

import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule} from '@angular/http';

import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Liste1Page,
    Liste2Page,
    Liste3Page,
    Liste4Page,
    Intro
  ], 

  
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'}),
    IonicStorageModule.forRoot()
  ],

  bootstrap: [IonicApp],

  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Liste1Page,
    Liste2Page,
    Liste3Page,
    Liste4Page,
    Intro

  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SocialSharing
  ]
})
export class AppModule {}

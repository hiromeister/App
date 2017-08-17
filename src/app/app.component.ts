import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { Liste1Page } from '../pages/liste1/liste1';
import { Liste2Page } from '../pages/liste2/liste2';
import { Liste3Page } from '../pages/liste3/liste3';
import { Liste4Page } from '../pages/liste4/liste4';
import { Intro } from '../pages/intro/intro';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;
  loader:any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public storage: Storage, public loadingCtrl: LoadingController) {
    

    this.presentLoading();
 
    this.platform.ready().then(() => {
 
      this.storage.get('introShown').then((result) => {
 
        if(result){
          this.rootPage = HomePage;
        } else {
          this.rootPage = Intro;
          this.storage.set('introShown', true);
        }
 
        this.loader.dismiss();
 
      });
 
    });
    
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accueil', component: HomePage },
      { title: "Liste d'actualité", component: ListPage }
    ];

  }
    
  presentLoading() {
 
    this.loader = this.loadingCtrl.create({
      content: "Chargement..."
    });
 
    this.loader.present();
 
  }
    
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
    
    
    
    
    
    
    


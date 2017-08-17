import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class Intro {

  @ViewChild(Slides) slides: Slides;
  skipMsg: string = "Skip";
  state: string = "x";



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }



  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }

    slideChanged(){
    if(this.slides.isEnd()) {
      this.skipMsg = "Compris !";
    } else { this.skipMsg = "Skip"}
  }

  

    skip(){
    this.navCtrl.setRoot(HomePage);
  }

}

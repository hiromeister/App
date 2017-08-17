import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, NavParams } from 'ionic-angular';

import { Liste1Page } from '../../pages/liste1/liste1';
import { Liste2Page } from '../../pages/liste2/liste2';
import { Liste3Page } from '../../pages/liste3/liste3';
import { Liste4Page } from '../../pages/liste4/liste4';

import { SocialSharing } from '@ionic-native/social-sharing';


import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})




export class HomePage {


  tab1Root = Liste1Page;
  tab2Root = Liste2Page;
  tab3Root = Liste3Page;
  tab4Root = Liste4Page;

  public feeds: Array<any>;
  private allUrl: string = "https://www.reddit.com/new.json";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {



    this.http.get(this.allUrl).map(res => res.json())
      .subscribe(data => {
        this.feeds = data.data.children;
        this.feeds.forEach((e, i, a) => {
          if (!e.data.thumbnail || e.data.thumbnail.indexOf('b.thumbs.redditmedia.com') === -1) {
            e.data.thumbnail = 'http://www.redditstatic.com/icon.png';
            console.log(data);  
          }

        })

      });

      this.http.get('https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=dcc207f63ae647f8b796aabcb7138cef').map(res => res.json()).subscribe((data) => {
    console.log(data);
});

  }


}





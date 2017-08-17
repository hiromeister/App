import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-liste2',
  templateUrl: 'liste2.html',
})
export class Liste2Page {

  public feeds: Array<any>;
  private allUrl: string = "https://www.reddit.com/top.json";

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private socialSharing: SocialSharing) {

        this.http.get(this.allUrl).map(res => res.json())
        .subscribe(data => {  
        this.feeds = data.data.children;
        this.feeds.forEach((e, i, a) => {
          if (!e.data.thumbnail || e.data.thumbnail.indexOf('b.thumbs.redditmedia.com') === -1 ) { 
          e.data.thumbnail = 'http://www.redditstatic.com/icon.png';
          }
        });
      
        });
    }
      regularShare(){
      this.socialSharing.share("Testing, sharing this from inside an app I'm building right now", null, "www/assets/img/hulk.jpg", null); 
    }
}
          

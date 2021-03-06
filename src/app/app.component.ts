import { Component } from '@angular/core';
import { Platform,MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { OverlayPage } from '../pages/overlay/overlay';
import { ComponentsPage } from '../pages/components/components';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  pages:Array<{title:string,component:any}>=[];
  rootPage:any = HomePage;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public menuCtrl:MenuController
  ) {

    this.pages = [
      {title:'Home',component:HomePage},
      {title:'Overlay Page',component:OverlayPage},
      {title:'Components Page',component:ComponentsPage}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page:{title:string,component:any}): void{
  this.rootPage = page.component;
  this.menuCtrl.close();
  };
}

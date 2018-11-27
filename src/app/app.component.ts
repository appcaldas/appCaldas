import { ReservasPage } from './../pages/reservas/reservas';
import { InfoperfilPage } from './../pages/infoperfil/infoperfil';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { timer } from 'rxjs/observable/timer';
import { HomeCardsPage } from '../pages/home-cards/home-cards';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomeCardsPage;

  showSplash = true;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // formatação das páginas que aparecem no Menu
    this.pages = [
      { title: 'Lista de Reservas', component: ReservasPage, icon: 'home'},
      { title: 'Ajuda', component: InfoperfilPage, icon: 'information-circle' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(()=> this.showSplash = false)
    });
  }

  openPage(page) {
    this.nav.push(page.component);
  }

  exitApp() {
    this.nav.setRoot(LoginPage);
  }
}

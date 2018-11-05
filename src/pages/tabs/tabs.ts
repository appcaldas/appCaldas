import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomeCardsPage } from './../home-cards/home-cards';
import { InfoperfilPage } from '../infoperfil/infoperfil';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

tab1Root = HomeCardsPage;
tab2Root = InfoperfilPage
  constructor(public navCtrl: NavController, public navParams: NavParams) {}
}

import { ApService } from './../services/apart-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DescricaoApPage } from '../descricao-ap/descricao-ap';

@IonicPage()
@Component({
  selector: 'page-home-cards',
  templateUrl: 'home-cards.html',
  providers: [ApService]
})
export class HomeCardsPage {

  public apart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, apartService: ApService) {
    this.apart = apartService.getAll();
    //this.apart = apartService.getItem(navParams.get('navParams'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeCardsPage');
  }

  // Evento de push para descrição do apartamento
  pushDesc(id) : void{
    this.navCtrl.push(DescricaoApPage, {id: id});
  }
}

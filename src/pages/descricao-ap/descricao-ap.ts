import { EditarApPage } from './../editar-ap/editar-ap';
import { ApagaimovelPage } from './../apagaimovel/apagaimovel';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApService } from '../services/apart-service';

/**
 * Generated class for the DescricaoApPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-descricao-ap',
  templateUrl: 'descricao-ap.html',
  providers: [ApService]
})
export class DescricaoApPage {
  public apart:  any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apartService: ApService) {

    this.apart = apartService.getItem(navParams.get('id'));
  }
  carregarpage() {
    this.navCtrl.push(ApagaimovelPage);
  }
  updateInfo() {
    this.navCtrl.push(EditarApPage);
  }
}

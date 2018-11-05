import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlteradadosPage } from '../alteradados/alteradados';


@IonicPage()
@Component({
  selector: 'page-infoperfil',
  templateUrl: 'infoperfil.html',
})
export class InfoperfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  mudapage(){
    this.navCtrl.push(AlteradadosPage);
  }
}

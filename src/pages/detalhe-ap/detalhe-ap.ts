import { ApagaimovelPage } from './../apagaimovel/apagaimovel';
import { ApartamentosProvider } from './../../providers/apartamentos/apartamentos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { LocalizacaoPage } from '../localizacao/localizacao';




@IonicPage()
@Component({
  selector: 'page-detalhe-ap',
  templateUrl: 'detalhe-ap.html',
})
export class DetalheApPage {

  public aparts: any[];
  public status = "Livre";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    //public apartamentosProvider: ApartamentosProvider,
    public toast: ToastController
    ) {
      this.aparts = this.navParams.get('apart');
  }

ionViewDidLoad(){
  console.log('>>>>>> '+this.retornaAp());

}

  public retornaAp() {
    return this.aparts;
  }


public presentAlertStatus(event) {
  this.status = "Ocupado"
  if(!event.checked) {

    let alert = this.alertCtrl.create({
      title: 'Atenção',
      message: 'Deseja liberar esse apartemento?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            event.checked = true;
            this.status = "Ocupado"
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            event.checked = false;
            this.status = "Disponível"
          }
        }
      ]
    });
    alert.present();
  }
}

public pushMaps(apart: any[]) {
  this.navCtrl.push(LocalizacaoPage, {apart});
}
public pushDelete(apart: any[]) {
  this.navCtrl.push(ApagaimovelPage, {apart});
}
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { ApartamentosProvider } from '../../providers/apartamentos/apartamentos';
import { DetalheApPage } from '../detalhe-ap/detalhe-ap';

@IonicPage()
@Component({
  selector: 'page-home-cards',
  templateUrl: 'home-cards.html',
  providers: [ApartamentosProvider]
})
export class HomeCardsPage {

  public apart: any;
  public apartamento: any[];
  public page: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apartamentosProvider: ApartamentosProvider,
    public toast: ToastController) {

      this.apart = apartamentosProvider.getAll();
      this.getAllApartamentos();
      this.apartamento = [];

  }

  getAllApartamentos() {
    this.apartamentosProvider.getAll()
      .then((result: any) => {
        for(var i = 0; i < result.length; i++) {
          var apart = result[i];
          this.apartamento.push(apart);
        }
      })
      .catch((error: any) => {
         this.toast.create({message: 'Erro ao exibir os apartamentos.', position: 'botton', duration: 3000}).present();
      });
  }

  // exibir detalhe do apartamento por 'id'.
  openApartamento(codigoanuncio: any) {
    this.apartamentosProvider.get(codigoanuncio)
      .then((result: any) => {
        this.navCtrl.push(DetalheApPage, { apart: result });
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recuperar o apartamento. ', position: 'botton', duration: 3000 }).present();
      });
  }

}

import { ReservaProvider } from './../../providers/reserva/reserva';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-reservas',
  templateUrl: 'reservas.html',
  providers: [ReservaProvider]
})
export class ReservasPage {

  public apart: any;
  public reserva: any[];
  public page: number;
  items: any = [];
  itemExpandHeight: number = 100;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public reservaProvider: ReservaProvider,
    public toast: ToastController) {

      this.apart = reservaProvider.getAll();
      this.getAllReservas();
      this.reserva = [];
      this.items = [
        {expanded: false},
        {expanded: false},
        {expanded: false},
        {expanded: false},
        {expanded: false},
        {expanded: false},
        {expanded: false},
        {expanded: false},
        {expanded: false}
      ];

  }

  getAllReservas() {
    this.reservaProvider.getAll()
      .then((result: any) => {
        for(var i = 0; i < result.length; i++) {
          var reservaV = result[i];
          if(reservaV.ativo == 1){
            reservaV.ativo = "Ativo";
          }else{
            reservaV.ativo = "Inativo";
          }
          this.reserva.push(reservaV);
        }
      })
      .catch((error: any) => {
         this.toast.create({message: 'Erro ao exibir as reservas.', position: 'botton', duration: 3000}).present();
      });
  }

  // exibir detalhe do apartamento por 'id'.
  openReserva(idReserva: any) {
    this.reservaProvider.get(idReserva)
      .then((result: any) => {
        this.navCtrl.push('DetalheReservaPage', { reservaV: result });
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recuperar a reserva. ', position: 'botton', duration: 3000 }).present();
      });
  }
  

}






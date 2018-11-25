import { ReservasPage } from './../reservas/reservas';
import { ReservaProvider } from './../../providers/reserva/reserva';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-detalhereserva',
  templateUrl: 'detalhereserva.html',
  providers: [ReservaProvider]
})
export class DetalheReservaPage {

  public reservas: any[];
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public reservaP: ReservaProvider,
    public toast: ToastController) {
      this.reservas = this.navParams.get('reservaV');
      
  }
  
  finalizarReserva(id){
    this.reservaP.finaliza(id)
    .then((result: any) =>{
      if(result.status = 200){
      this.toast.create({message: result.mensagem, position:'bottom', duration:3000}).present();
      this.navCtrl.push(ReservasPage);
      }
      else{
        this.toast.create({message: 'Erro: '+result.status+' '+result.mensagem,position:'bottom', duration:3000}).present();
      } 
      })
      .catch((error: any) => {
        this.toast.create({message: 'não foi possível comunicar com o servidor',position:'bottom', duration:3000}).present();
      });
  
      }
  }
  




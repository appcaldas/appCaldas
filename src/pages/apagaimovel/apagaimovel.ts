import { HomeCardsPage } from './../home-cards/home-cards';
import { ApartamentosProvider } from './../../providers/apartamentos/apartamentos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-apagaimovel',
  templateUrl: 'apagaimovel.html',
})
export class ApagaimovelPage {

  public aparts: any[];

  public apartamento: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apartamentoP: ApartamentosProvider,
    public toast: ToastController
    ) {
      this.aparts = this.navParams.data;
      this.converter(this.aparts);
    }

    ionViewDidLoad() {
   
    console.log('apartamento>>>>'+this.apartamento);

  }

  public converter(apart: any){
    const aparts = [];
    Object.keys(apart).forEach(element => {

     aparts.push(apart[element])

     this.apartamento = aparts;

     console.log(aparts);
    });
  }
  apagaAp(id){
    this.apartamentoP.delete(id)
    .then((resultado: any) =>{
      if(resultado.status = 200){
      this.toast.create({message: resultado.mensagem, position:'bottom', duration:3000}).present();
      this.navCtrl.setRoot(HomeCardsPage);
      }
      else{
        this.toast.create({message: 'Erro: '+resultado.status+' '+resultado.mensagem,position:'bottom', duration:3000}).present();
      } 
      })
      .catch((error: any) => {
        this.toast.create({message: 'não foi possível comunicar com o servidor',position:'bottom', duration:3000}).present();
      });
  
      }
}
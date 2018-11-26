import { HomeCardsPage } from './../home-cards/home-cards';
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
    public apartamentosProvider: ApartamentosProvider,
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


 public presentAlertStatus(event, id) {
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
            let param = 'a/'+id;
             this.status = "Disponível"
             this.alteraStatus(param);
           }
         }
       ]
     });
     alert.present();
   }else{
    let param = 'i/'+id;
    this.alteraStatus(param);
   }
 }

public pushMaps(apart: any[]) {
  this.navCtrl.push(LocalizacaoPage, {apart});
}
public pushDelete(apart: any[]) {
  this.navCtrl.push(ApagaimovelPage, {apart});
}
public alteraStatus(id){
  this.apartamentosProvider.trocaStatus(id)
  .then((result: any) =>{
    if(result.status = 201){
      this.toast.create({message: result.mensagem, position:'bottom', duration:3000}).present();
      this.navCtrl.push(HomeCardsPage);
    }else if(result.status = 202){
      this.toast.create({message: result.mensagem, position:'bottom', duration:3000}).present();
      this.navCtrl.push(HomeCardsPage);
    }else{
      this.toast.create({message: 'Erro: '+result.status+' '+result.mensagem,position:'bottom', duration:3000}).present();
    } 
    })
    .catch((error: any) => {
      this.toast.create({message: 'não foi possível comunicar com o servidor',position:'bottom', duration:3000}).present();
    });

    }
}


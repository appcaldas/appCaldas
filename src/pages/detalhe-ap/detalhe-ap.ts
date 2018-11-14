import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApartamentosProvider } from '../../providers/apartamentos/apartamentos';



@IonicPage()
@Component({
  selector: 'page-detalhe-ap',
  templateUrl: 'detalhe-ap.html',
})
export class DetalheApPage {

  public aparts: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    //public apartamentos: ApartamentosProvider
    ) {

      this.aparts = this.navParams.get('apart');
  }

ionViewDidLoad(){
 console.log(this.aparts);

}

}

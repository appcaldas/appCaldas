import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-localizacao',
  templateUrl: 'localizacao.html',
})
export class LocalizacaoPage {

  public maps: any;
  public localMaps = 'Rua Rio de Janeiro, Caldas Novas - GO';
  public aparts: any[];

  public apartamento: any[];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) {
      this.aparts = this.navParams.data;
      this.converter(this.aparts);
    }

    ionViewDidLoad() {
    this.maps = this.getMaps();
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
  public getMaps() {
    return 'https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=400x400&markers=color:red|' + this.localMaps + '&key=AIzaSyA0PiH0-0lUT-eniII35-r-ZP1Hjb_Zv6M'
  }

  popPage() {
    this.navCtrl.pop();
  }
}

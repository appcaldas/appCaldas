import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-localizacao',
  templateUrl: 'localizacao.html',
})
export class LocalizacaoPage {

  public cidade: string;
  public uf: string;
  public endereco: string;

  public maps: any;
  public aparts: any[];

  public apartamento: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) {
      this.aparts = this.navParams.data;
      this.converter(this.aparts);
      this.getApartamento(this.apartamento);
    }

  ionViewDidLoad() {
    this.maps = this.getMaps();
  }

  public converter(apart: any){
    const aparts = [];
    Object.keys(apart).forEach(element => {

     aparts.push(apart[element])

     this.apartamento = aparts;
    });
  }

  getApartamento(apart:any) {

    for(let ap of apart){
      this.cidade = ap.cidade;
      this.uf = ap.uf;
      this.endereco = ap.endereco;
    }
  }
  public getMaps() {
    return 'https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=400x400&markers=color:red|' + this.endereco + ', ' + this.cidade + '-' + this.uf + '&key=AIzaSyA0PiH0-0lUT-eniII35-r-ZP1Hjb_Zv6M'
  }

  popPage() {
    this.navCtrl.pop();
  }
}

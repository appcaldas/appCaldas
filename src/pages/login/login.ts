import { TabsPage } from './../tabs/tabs';

import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  model = new User;
  constructor(
    public navCtrl: NavController, public navParams: NavParams, 
    private toast: ToastController, private UsersProvider: UsersProvider) {
  }

  
  login(){
    if(this.model.login == null){
      this.toast.create({message: 'Preencha o campo de Login', position:'bottom', duration:3000}).present();
    }else if(this.model.senha == null){
      this.toast.create({message: 'Preencha o campo de senha', position:'bottom', duration:3000}).present();
    }else{
    this.UsersProvider.login(this.model.login,this.model.senha)
    .then((result: any) =>{
      if(result.id != null){
      this.toast.create({message: 'Usuário logado com sucesso', position:'bottom', duration:3000}).present();
      this.navCtrl.setRoot(TabsPage)
      }else{
        this.toast.create({message: 'Erro: '+result.status+' '+result.mensagem,position:'bottom', duration:3000}).present();
      }
    })
    .catch((error: any) => {
      this.toast.create({message: 'não foi possível comunicar com o servidor',position:'bottom', duration:3000}).present();
    });
  
  }
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
}

  export class User{
    login: string;
    senha: string;
  }



import { TabsPage } from './../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { ApService } from './../pages/services/apart-service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomeCardsPage } from '../pages/home-cards/home-cards';
import { LoginPage } from '../pages/login/login';
import { ApagaimovelPage } from '../pages/apagaimovel/apagaimovel';
import { AlteradadosPage } from '../pages/alteradados/alteradados';
import { EditarApPage } from '../pages/editar-ap/editar-ap';
import { InfoperfilPage } from '../pages/infoperfil/infoperfil';
import { ApartamentosProvider } from '../providers/apartamentos/apartamentos';
import { UsersProvider } from '../providers/users/users';
import { DetalheApPage } from '../pages/detalhe-ap/detalhe-ap';
import { LocalizacaoPage } from '../pages/localizacao/localizacao';

@NgModule({
  declarations: [
    MyApp,
    HomeCardsPage,
    TabsPage,
    LoginPage,
    InfoperfilPage,
    ApagaimovelPage,
    AlteradadosPage,
    EditarApPage,
    DetalheApPage,
    LocalizacaoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomeCardsPage,
    TabsPage,
    LoginPage,
    InfoperfilPage,
    ApagaimovelPage,
    AlteradadosPage,
    EditarApPage,
    DetalheApPage,
    LocalizacaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApService,
    ApartamentosProvider,
    UsersProvider
  ]
})
export class AppModule {}

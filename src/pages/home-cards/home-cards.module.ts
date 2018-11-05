import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeCardsPage } from './home-cards';

@NgModule({
  declarations: [
    HomeCardsPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeCardsPage),
  ],
})
export class HomeCardsPageModule {}

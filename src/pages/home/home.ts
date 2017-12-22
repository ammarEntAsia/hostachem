import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgingPage } from '../aging/aging';
import { CutomerWisePage } from '../cutomer-wise/cutomer-wise';
import { LedgerPage } from '../ledger/ledger';
import { StockPage } from '../stock/stock';
import { LoginPage } from '../login/login';
import { Auth, User, UserDetails } from '@ionic/cloud-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public auth: Auth) {

  }

  ledger() {
    this.navCtrl.push(LedgerPage);
  }
  stock(){
    this.navCtrl.push(StockPage);
  }
  aging() {
    this.navCtrl.push(AgingPage);
  }
  details() {
    this.navCtrl.push(CutomerWisePage);
  }
  logout() {
    let loader = this.loadingCtrl.create({
      content: "Logging Out...",
      duration: 3000
    });
    loader.present();
    this.auth.logout();
    this.navCtrl.setRoot(LoginPage);
  }
}

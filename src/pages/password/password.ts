import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {
  private code: number;
  private password: string;
  constructor(public loadingCtrl: LoadingController,private navCtrl: NavController,public auth: Auth, public user: User,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
  }

  pass() {
    this.auth.confirmPasswordReset(this.code, this.password);
    let loader = this.loadingCtrl.create({
      content: "Login Again...",
      duration: 2000
    });
    loader.present();
    this.navCtrl.setRoot(LoginPage);
  }

}

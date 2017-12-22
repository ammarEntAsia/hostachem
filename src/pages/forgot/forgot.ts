import { ViewChild, Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { AlertController } from 'ionic-angular';
import { PasswordPage } from '../password/password';
import { LoadingController } from 'ionic-angular';



@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {
  @ViewChild('email') email: any;
  private username: string;
  constructor(public loadingCtrl: LoadingController,private navCtrl: NavController,public auth: Auth, public user: User,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.email.setFocus();
    }, 500);
  }

  forgotPass() {
    this.auth.requestPasswordReset(this.username);
    let loader = this.loadingCtrl.create({
      content: "Please Wait...",
      duration: 2000
    });
    loader.present();
    this.navCtrl.push(PasswordPage);
  }
}

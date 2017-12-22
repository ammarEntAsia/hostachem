import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  @ViewChild('email') email: any;
  private username: string;
  private password: string;
  private error: string;
  constructor(public loadingCtrl: LoadingController,private navCtrl: NavController,public auth: Auth, public user: User,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.email.setFocus();
    }, 500);
  }

  signup() {
    let details: UserDetails = {'email': this.username, 'password': this.password};
    let loader = this.loadingCtrl.create({
      content: "Registering User...",
      duration: 3000
    });
    loader.present();
    this.auth.signup(details).then(() => {
      this.navCtrl.pop();
    }, (err: IDetailedError<string[]>) => {
      for (let e of err.details) {
        if (e === 'conflict_email') {
          let alert = this.alertCtrl.create({
            title: "Already Registered.",
            subTitle: 'Email Already Registered.',
            buttons: ['OK']
          });
          alert.present();
        } else {
          console.log('Other Error.');
        }
      }
    });
  }

}

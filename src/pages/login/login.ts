import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { ForgotPage } from '../forgot/forgot';
import { LoadingController } from 'ionic-angular';
import { Users } from "../../shared/models/user";
import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  @ViewChild('email') email: any;
  private username: string;
  private password: string;
  private error: string;
  user = {} as Users;

  constructor(private afAuth: AngularFireAuth,public loadingCtrl: LoadingController,private navCtrl: NavController,public auth: Auth, 
    public alertCtrl: AlertController) {
    
  }

  async login(user: Users) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        let loader = this.loadingCtrl.create({
          content: "Welcome!",
          duration: 2000
        });
        loader.present();
        this.navCtrl.setRoot(HomePage);
      }  
    }
    catch (e) {
      let loader = this.loadingCtrl.create({
        content: e,
        duration: 2000
      });
      loader.present();
    }
  }
 
  async register(user: Users) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      if (result) {
        this.navCtrl.setRoot(HomePage);
      }
    } catch (e) {
      let loader = this.loadingCtrl.create({
        content: e,
        duration: 2000
      });
      loader.present();
    }
  }

}

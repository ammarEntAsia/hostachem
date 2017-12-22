import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';


@Component({
  selector: 'page-customer-aging-modal',
  templateUrl: 'customer-aging-modal.html',
})
export class CustomerAgingModalPage {
  data: any;
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get('myParam');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerAgingModalPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}

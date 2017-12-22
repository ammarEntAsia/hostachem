import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-stock-modal',
  templateUrl: 'stock-modal.html',
})
export class StockModalPage {
  data: any;
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get('myParam');
  }

  ionViewDidLoad() {
    // console.log(this.data);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController  } from 'ionic-angular';
import { Users } from "../../shared/models/user";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CustomerAgingModalPage } from '../customer-aging-modal/customer-aging-modal';



@Component({
  selector: 'page-aging',
  templateUrl: 'aging.html',
})
export class AgingPage {
  user = {} as Users;
  dated1: string;
  dated2: string;
  posts: any;
  constructor(public modalCtrl: ModalController, public http: Http,public navCtrl: NavController, public navParams: NavParams) {
  }

  getStock(user: Users) {
    this.getRemoteData(this.convertDate(user.date1),this.convertDate(user.date2));
  }

  ionViewDidLoad() {
    console.log("ViewDidLoad");
  }

  convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
  }

  getRemoteData(dated1,dated2){
    this.http.get('http://210.56.3.122:9090/ws/BTMobileSynch.asmx/GetSalesReportCustomerWiseDetails?PID1='+dated1+'&PID2='+dated2+'').map(res => res.json()).subscribe(
      data => {
        this.posts = data;
        let modal = this.modalCtrl.create(CustomerAgingModalPage, { 'myParam': this.posts });
        console.log(this.posts);
        modal.present();
    },
    err => {
        console.log("Oops!");
    });
  }

}

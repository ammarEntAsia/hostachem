import { Component, ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
// import { EfroTechProvider } from '../../providers/efro-tech/efro-tech'; public remoteData: EfroTechProvider,
import { Users } from "../../shared/models/user";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { StockModalPage } from '../stock-modal/stock-modal';

@Component({
  selector: 'page-stock',
  templateUrl: 'stock.html'
})
export class StockPage {
  // @ViewChild('date') date: any;
  user = {} as Users;
  dated: string;
  posts: any;
  constructor(public modalCtrl: ModalController, public http: Http,public navCtrl: NavController, public navParams: NavParams) {
  }

  getStock(user: Users) {
    this.getRemoteData(this.convertDate(user.date));
  }

  ionViewDidLoad() {
    console.log("ViewDidLoad");
  }

  convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
  }

  getRemoteData(dated){
    this.http.get('http://210.56.3.122:9090/ws/BTMobileSynch.asmx/GetClosingStock?PID1='+dated+'&PID2=HI').map(res => res.json()).subscribe(
      data => {
        this.posts = data;
        let modal = this.modalCtrl.create(StockModalPage, { 'myParam': this.posts });
        console.log(this.posts[0]);
        modal.present();
    },
    err => {
        console.log("Oops!");
    });
  }
  
  
}

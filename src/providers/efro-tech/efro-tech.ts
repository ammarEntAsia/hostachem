import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class EfroTechProvider {
  posts: any;
  constructor(public http: Http) {
    console.log('Hello EfroTechProvider Provider');
  }

  getRemoteData(){
    this.http.get('http://182.184.110.163:9090/ws/BTMobileSynch.asmx/GetClosingStock?PID1=13/12/2017&PID2=HI').map(res => res.json()).subscribe(
      data => {
        this.posts = data;
    },
    err => {
        console.log("Oops!");
    });
  }


}

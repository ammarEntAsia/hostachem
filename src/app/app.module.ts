import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AgingPage } from '../pages/aging/aging';
import { CutomerWisePage } from '../pages/cutomer-wise/cutomer-wise';
import { LedgerPage } from '../pages/ledger/ledger';
import { StockPage } from '../pages/stock/stock';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPage } from '../pages/forgot/forgot';
import { PasswordPage } from '../pages/password/password';
import { DatePickerModule } from 'ion-datepicker';
import { EfroTechProvider } from '../providers/efro-tech/efro-tech';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { environment } from '../environments/environments';
import { StockModalPage } from '../pages/stock-modal/stock-modal';
import { CustomerAgingModalPage } from '../pages/customer-aging-modal/customer-aging-modal';


const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '57ca74be'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AgingPage,
    CutomerWisePage,
    LedgerPage,
    StockPage,
    LoginPage,
    SignupPage,
    PasswordPage,
    ForgotPage,
    StockModalPage,
    CustomerAgingModalPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DatePickerModule,
    CloudModule.forRoot(cloudSettings),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AgingPage,
    CutomerWisePage,
    LedgerPage,
    StockPage,
    LoginPage,
    SignupPage,
    PasswordPage,
    ForgotPage,
    StockModalPage,
    CustomerAgingModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EfroTechProvider
  ]
})
export class AppModule {}

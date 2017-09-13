import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VehiclePage } from '../pages/vehicle/vehicle';
import { ListVehicleTypePage } from '../pages/list-vehicle-type/list-vehicle-type';
import { TypeVehicleProvider } from '../providers/type-vehicle/type-vehicle';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VehiclePage,
    ListVehicleTypePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VehiclePage,
    ListVehicleTypePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TypeVehicleProvider
  ]
})
export class AppModule {}

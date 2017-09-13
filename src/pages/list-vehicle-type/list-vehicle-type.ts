import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { TypeVehicleProvider } from '../../providers/type-vehicle/type-vehicle';

@IonicPage()
@Component({
  selector: 'page-list-vehicle-type',
  templateUrl: 'list-vehicle-type.html',
})
export class ListVehicleTypePage {

  vehicles: String[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private typeVehicleProvider: TypeVehicleProvider,
              private viewCtrl: ViewController
            ) 
  {
    
  }

  ionViewDidLoad() {
    this.typeVehicleProvider.getVehicleTypes(this.vehicles);
  }

  selectVehicleType(vehicle) {
    this.viewCtrl.dismiss(vehicle);
  }
  
}

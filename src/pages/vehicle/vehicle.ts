import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { VehicleInfo } from '../models/vehicle-info.model';
import { ListVehicleTypePage } from '../list-vehicle-type/list-vehicle-type';

@IonicPage()
@Component({
  selector: 'page-vehicle',
  templateUrl: 'vehicle.html',
})
export class VehiclePage {

  vehicleInfo: VehicleInfo;
  inputVin: string;
  isValidVin: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
    this.vehicleInfo = new VehicleInfo();
  }

  ionViewDidLoad() {
    let a = this.navParams.get('vehicle');
    console.log(a);
  }

  goToVehicleList() {
    let modal = this.modalCtrl.create(ListVehicleTypePage);
    modal.present();

    modal.onDidDismiss( params => {
      this.vehicleInfo.vehicleType = params;
      console.log(params);
    })
  }

  validateVin(e) {
    this.inputVin = e.target.value;

    if (this.inputVin.length == 16) {
      this.isValidVin = true;
    } else {
      this.isValidVin = false;
    }
  }

  vinContinue() {
    this.vehicleInfo.vinInfo = this.inputVin;
  }

}

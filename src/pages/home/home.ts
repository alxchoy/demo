import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { VehiclePage } from '../vehicle/vehicle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data = {
    user: '',
    password: ''
  };

  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {
  }

  validateUser(form) {
    console.log(form.value);
    if ( this.data.user == "47810411" && this.data.password == "123456" ) {
      this.navCtrl.push(VehiclePage);
    } else {
      let toast = this.toastCtrl.create({
        message: 'Usuario o contraseña incorrecta',
        duration: 2000,
        position: 'top'
      });
      toast.present();
    }
  }

}

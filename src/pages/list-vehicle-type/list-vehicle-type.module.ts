import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListVehicleTypePage } from './list-vehicle-type';

@NgModule({
  declarations: [
    ListVehicleTypePage,
  ],
  imports: [
    IonicPageModule.forChild(ListVehicleTypePage),
  ],
})
export class ListVehicleTypePageModule {}

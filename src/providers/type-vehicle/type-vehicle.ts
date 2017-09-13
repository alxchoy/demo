import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TypeVehicleProvider {

  listVehicleType: String[];

  vehicleTypes = [
    {
      id: 1,
      name: 'Automovil'
    },
    {
      id: 2,
      name: 'Camión'
    },
    {
      id: 3,
      name: 'Moto'
    },
    {
      id: 4,
      name: 'Triciclo'
    },
    {
      id: 5,
      name: 'Bicicleta'
    }
  ]

  constructor() {
    console.log('Hello TypeVehicleProvider Provider');
  }


  getVehicleTypes(a) {
    this.vehicleTypes.map( (i) => {
      a.push(i.name);
    });
  }

}

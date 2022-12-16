import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   //function should take an equipment object as parameter and add item to cargoHold array
   //function should also add the mass of the item to the cargoMass property
   //function should return true or false depending on whether cargoMass is within 200kg  of maximumAllowedMass
    addItem(equipmentObject) {
        if (this.cargoMass + equipmentObject.mass
            <= this.maximumAllowedMass && this.cargoHold.length < this.maxItems) {
            this.cargoHold.push(equipmentObject);
            this.cargoMass += equipmentObject.mass;
            return true;
        } else {
            return false;
        }  

      }
}

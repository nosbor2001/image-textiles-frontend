import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './costume-order.component.html',
  styleUrls: ['./costume-order.component.css']
})
export class CostumeOrderComponent implements OnInit {
  costumeOrders = new FormGroup({
    customerName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      county: new FormControl(''),
      postcode: new FormControl('')
    }),
    contactOne: new FormControl(''),
    contactTwo: new FormControl(''),
    email: new FormControl(''),
    notes: new FormControl('')
  });

//<!-- Need costume orders, costume samples, uniform orders, uniform samples -->

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.costumeOrders.value);
  }

  // orderSelect(formNum : number) {
  //   if (formNum == 1){
  //     //this.costumeOrders.removeControl('costumeOrders');
  //     (document.getElementById('costumeOrders') as HTMLFormElement).remove()
  //   }
  //   if (formNum == 2){
  //     this.costumeSamples.disable()
  //   }
  //   if (formNum == 3){
  //     this.uniformOrders.disable()
  //   }
  //   if (formNum == 4){
  //     this.uniformSamples.disable()
  //   }
    
  // }

}

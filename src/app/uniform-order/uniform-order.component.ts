import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-uniform-order',
  templateUrl: './uniform-order.component.html',
  styleUrls: ['./uniform-order.component.css']
})
export class UniformOrderComponent implements OnInit {
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
}

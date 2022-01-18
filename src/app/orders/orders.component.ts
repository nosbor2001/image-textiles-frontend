import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  costumeOrders!: FormGroup;
  costumeSamples!: FormGroup;
  uniformOrders!: FormGroup;
  uniformSamples!: FormGroup;

//<!-- Need costume orders, costume samples, uniform orders, uniform samples -->

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.costumeOrders.value);
  }

}

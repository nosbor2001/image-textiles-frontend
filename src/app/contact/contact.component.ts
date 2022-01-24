import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // costumeOrders = new FormGroup({
  //   customerName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     county: new FormControl(''),
  //     postcode: new FormControl('')
  //   }),
  //   contactOne: new FormControl(''),
  //   contactTwo: new FormControl(''),
  //   email: new FormControl(''),
  //   notes: new FormControl('')
  // });

//<!-- Need costume orders, costume samples, uniform orders, uniform samples -->

  contactForm = this.formBuilder.group({
    contactForename: '',
    contactSurname: '',
    contactPosition: '',
    contactAddress: '',
    contactPhone: '',
    contactEmail: '',
    contactRole: ''
  })

  customers: any

  constructor(
    private dataSerivce: DataService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.contactForm.value);
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';

const API = "http://localhost:5454/api/"

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  filters: any

  contactForm = this.formBuilder.group({
    customer: '',
    firstName: '',
    lastName: '',
    position: '',
    address: '',
    phoneNumber: '',
    email: '',
    responsibility: ''
  })

  customers: any
  contacts: any

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getCustomers().subscribe({
      next: data => {
        this.customers = data.data
        // console.warn(data.data)
      }
    })

    this.dataService.getContacts().subscribe({
      next: data => {
        this.contacts = data.data
        console.warn(data.data)
      }
    })
  }

  onSubmit(): void {
    // console.log(this.contactForm.value)
    this.dataService.createContact(this.contactForm.value).subscribe({
      next: data => {
        console.warn(data)
      }
    })
  }

}

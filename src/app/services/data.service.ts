import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = "http://localhost:5454/api/"
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  testAuthEndpoint(): Observable<any> {
    return this.http.get(API, httpOptions)
  }

  getCustomers(): Observable<any> {
    return this.http.get(API + "get_customers", httpOptions)
  }

  getContacts(): Observable<any> {
    return this.http.get(API + "get_contacts", httpOptions)
  }

  createContact(contactInfo: object): Observable<any> {
    return this.http.post(API + 'create_contact', {
      ...contactInfo
    }, httpOptions)
  }
}

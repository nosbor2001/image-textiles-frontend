import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

const AUTH_API = "http://localhost:5454/api/auth/";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isLoggedIn: boolean

  constructor(private http: HttpClient) { this.isLoggedIn = false}

  setLogin(value: boolean) {
    this.isLoggedIn = value
  }

  getLogin() {
    return this.isLoggedIn
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + "login", {
      username,
      password
    }, httpOptions)
  }

  register(username: string, role: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + "register", {
      username,
      role,
      password
    }, httpOptions)
  }

}

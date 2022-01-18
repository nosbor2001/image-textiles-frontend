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

  constructor(private http: HttpClient) { }

  login(_username: string, _password: string): Observable<any> {
    return this.http.post(AUTH_API + "login", {
      username: _username,
      password: _password
    }, httpOptions)
  }

}

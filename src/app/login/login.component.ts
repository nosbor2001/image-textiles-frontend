import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private authSerivce: AuthService,
    private router: Router,
    private tokenStorageService: TokenStorageService
    ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit(form: FormGroup) {
    const {username, password} = form.value;

    this.authSerivce.login(username, password).subscribe({
      next: data => {
        this.authSerivce.setLogin(true)
        this.tokenStorageService.saveToken(data.token)
        this.tokenStorageService.saveUser(data)
        this.router.navigate(['home'])
      },
      error: err => {
        console.error(err)
      }
    })
  }
  
  reloadPage(): void {
    window.location.reload()
  }

  onRegisterClick(): void {
    this.router.navigate(['register']);
  }

}

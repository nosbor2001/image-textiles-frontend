import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

const PASSWORD_REGEX = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  registerForm = this.formBuilder.group({
    username: '',
    role: '',
    password: ''
  })

  registered = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {username, role, password} = this.registerForm.value 
    if(username.length < 5 || username.length > 15) {
      this.alertService.showAlert('Error', "Username must be between 5 and 15 characters", "error", false)
    } else {
      if(!PASSWORD_REGEX.test(password)) {
        this.alertService.showAlert('Error', "Password must be more than 8 characters, contain at least one lowercase and uppercase character, contain at least one digit and contain at least one special character!", "error", false)
      } else {
        this.authService.register(username, role, password).subscribe({
          next: data => {
            this.alertService.showAlert('Success', "You have successfully registered, you'll now be redirected to the login page!", "success", false)
            setTimeout(() => {
              this.alertService.closeAlert()
              this.router.navigate(['login'])
            }, 3000)
    
          },
          error: err => {
            this.alertService.showAlert('Error', err.error.message, "error", false)
          }
        })
      }
    }
    
  }

  

}

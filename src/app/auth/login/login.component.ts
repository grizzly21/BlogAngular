import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../register/register.component.scss'],
})
export class LoginComponent {
  rememberUser: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.loginUser(this.loginForm.value).subscribe({
      next: (data) => {
        let result = JSON.parse(data);
        if (result.token) {
          !this.rememberUser
            ? sessionStorage.setItem('token', result.token)
            : localStorage.setItem('token', result.token);
          this.router.navigate(['top-stories']);
        }
      },
      error: (err) => {
        alert(err.error);
        this.loginForm.reset();
      },
    });
  }
}

import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private loginService: LoginService, private router: Router) {}

  login() {
    if (!this.email || !this.password) {
      window.alert('Preencha todos os campos');
      return;
    }
    this.loginService
      .login({ email: this.email, password: this.password })
      .subscribe(
        (response) => {
          if (!response.token || !response.user_id) {
            return;
          }

          localStorage.setItem('token', response.token);
          localStorage.setItem('user_id', response.user_id);

          this.router.navigate(['/task']);
        },
        (error) => {
          window.alert(JSON.stringify(error.error.message));
        }
      );
  }
}

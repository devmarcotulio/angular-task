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

  login(): void {
    const email = this.email;
    const password = this.password;

    if (!this.email || !this.password) {
      console.log('Preencha todos os campos');
      return;
    }
    this.loginService.login({ email, password }).subscribe(
      (response) => {
        if (!response.token) {
          console.log('O serviço de login não retornou um token válido');
          return;
        }

        localStorage.setItem('token', response.token);

        this.router.navigate(['/task']);
      },
      (error) => {
        if (error.error) {
          const message = JSON.stringify(error.error.message);
          window.alert(message);
        }
      }
    );
  }
}

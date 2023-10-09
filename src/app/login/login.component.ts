import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  login() {
    const { email, password } = this.formGroup.value;

    if (!email || !password) {
      window.alert('Preencha todos os campos');
      return;
    }
    this.loginService.login({ email, password }).subscribe(
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

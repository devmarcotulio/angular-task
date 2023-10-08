import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly LOGIN_API_URL = 'http://localhost:3000/auth';
  constructor(private http: HttpClient) {}

  login({ email, password }: Login): Observable<any> {
    return this.http.post(this.LOGIN_API_URL, { email, password });
  }
}

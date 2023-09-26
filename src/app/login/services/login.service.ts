import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login({ email, password }: Login): Observable<any> {
    return this.http.post('http://localhost:3000/auth', { email, password });
  }
}

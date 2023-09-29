import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../models/task.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private httpCliente: HttpClient) {}

  getTasks() {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.httpCliente.get<Task[]>('http://localhost:3000/tasks', {
      headers,
    });
  }

  createTask(task: Task) {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.httpCliente.post<Task>('http://localhost:3000/tasks', task, {
      headers,
    });
  }
}

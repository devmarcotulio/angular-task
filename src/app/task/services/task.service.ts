import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../models/task.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly token = localStorage.getItem('token');
  private readonly TASKS_API_URL = 'http://localhost:3000/tasks';
  private readonly headers: HttpHeaders = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  constructor(private httpCliente: HttpClient) {}

  getTasks() {
    return this.httpCliente.get<Task[]>(this.TASKS_API_URL, {
      headers: this.headers,
    });
  }

  getTaskByTitle(title: string) {
    return this.httpCliente.get<Task>(`${this.TASKS_API_URL}/title/${title}`, {
      headers: this.headers,
    });
  }

  createTask(task: Task) {
    return this.httpCliente.post<Task>(this.TASKS_API_URL, task, {
      headers: this.headers,
    });
  }

  deleteTask(id: string | null) {
    return this.httpCliente.delete<Task>(`${this.TASKS_API_URL}/${id}`, {
      headers: this.headers,
    });
  }

  updateTask(id: string, task: Task) {
    return this.httpCliente.patch<Task>(`${this.TASKS_API_URL}/${id}`, task, {
      headers: this.headers,
    });
  }
}

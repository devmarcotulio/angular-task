import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Task } from '../models/task.model'
import { Injectable } from '@angular/core'


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpCliente: HttpClient){
  }

  getTasks() {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMjkxYjRlNy05N2I3LTQwYjgtOWJjYy1iMGI4NzU5ZmZiNjkiLCJpYXQiOjE2OTI2NTA2NzksImV4cCI6MTY5NTI0MjY3OX0.LQGUH_qMnQ6pYSX9c1B4omE6uq7VjQ-mXy1BLMxzq2o'

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    })

    return this.httpCliente.get<Task[]>('http://localhost:3000/tasks', { headers })
  }
}

import { Component } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from './models/task.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tasks$ = new Observable<Task[]>()

  constructor(private taskService: TaskService) {
    this.getTasks()
  }

  getTasks() {
    this.tasks$ = this.taskService.getTasks()
  }
}

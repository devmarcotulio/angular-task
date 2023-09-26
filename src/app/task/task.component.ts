import { Component } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from './models/task.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  tasks$ = new Observable<Task[]>();

  constructor(private taskService: TaskService) {
    this.getTasks();
  }

  getTasks() {
    this.tasks$ = this.taskService.getTasks();
  }
}

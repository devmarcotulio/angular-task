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

  id = '';
  title = '';
  description = '';

  constructor(private taskService: TaskService) {
    this.getTasks();
  }

  getTasks() {
    this.tasks$ = this.taskService.getTasks();
  }

  createTask() {
    const user_id = localStorage.getItem('user_id');

    this.taskService
      .createTask({
        title: this.title,
        description: this.description,
        user_id,
      })
      .subscribe(
        (_response) => {},
        (error) => {
          window.alert(JSON.stringify(error.error.message));
        },
        () => this.getTasks()
      );
  }
}

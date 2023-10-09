import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from './models/task.model';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  tasks$ = new Observable<Task[]>();

  formGroup!: FormGroup;

  constructor(
    private taskService: TaskService,
    private formBuilder: FormBuilder
  ) {
    this.getTasks();
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      title: '',
      description: '',
    });
  }

  getTasks() {
    this.tasks$ = this.taskService.getTasks();
  }

  createTask() {
    const { title, description } = this.formGroup.value;
    const user_id = localStorage.getItem('user_id');

    this.taskService
      .createTask({
        title,
        description,
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

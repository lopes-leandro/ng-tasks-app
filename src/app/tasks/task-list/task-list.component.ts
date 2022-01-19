import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TaskInterface } from 'src/app/shared/models/task-interface';
import { TaskService } from '../task.service';

@Component({
  selector: 'tks-task-list',
  templateUrl: './task-list.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class TaskListComponent implements OnInit {
  tasks: TaskInterface[];

  constructor(private taskService: TaskService) {
    this.tasks = taskService.getTasks();
  }

  ngOnInit(): void {}

  public addTask(title: string) {
    const task: TaskInterface = {
      title,
      done: false,
    };       
    this.taskService.addTask(task);
    this.tasks = this.taskService.getTasks();
  }

  public updateTask(task: TaskInterface): void {
    this.taskService.updateTask(task);
    this.tasks = this.taskService.getTasks();
  }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TaskInterface, TaskListFilterType } from 'src/app/shared/models/task-interface';
import { TaskService } from '../task.service';

@Component({
  selector: 'tks-task-list',
  templateUrl: './task-list.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class TaskListComponent implements OnInit {
  tasks: TaskInterface[];
  filteredTasks: TaskInterface[] = [];
  taskFilterTypes: TaskListFilterType[] = ['all', 'open', 'done'];
  activeTaskFilterType: TaskListFilterType = 'all';

  constructor(private taskService: TaskService) {
    this.tasks = taskService.getTasks();
    this.filterTasks();
  }

  ngOnInit(): void {}

  public activateFilterType(type: string) {
    this.activeTaskFilterType = type as TaskListFilterType;
    this.filterTasks();
  }

  public filterTasks() {
    this.filteredTasks = this.tasks.filter((task: TaskInterface) => {
      if (this.activeTaskFilterType === 'all') {
        return true;
      } else if (this.activeTaskFilterType === 'open') {
        return !task.done;
      } else {
        return task.done;
      }
    });
  }

  public addTask(title: string) {
    const task: TaskInterface = {
      title,
      done: false,
    };       
    this.taskService.addTask(task);
    this.tasks = this.taskService.getTasks();
    this.filterTasks();
  }

  public updateTask(task: TaskInterface): void {
    this.taskService.updateTask(task);
    this.tasks = this.taskService.getTasks();
    this.filterTasks();
  }
}

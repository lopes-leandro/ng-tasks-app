import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task, TaskListFilterType } from 'src/app/shared/models/task.interface';
import { TaskService } from '../task.service';

@Component({
  selector: 'tks-task-list',
  templateUrl: './task-list.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class TaskListComponent implements OnInit {
  tasks: Observable<Task[]>;
  filteredTasks: Observable<Task[]>;
  taskFilterTypes: TaskListFilterType[] = ['all', 'open', 'done'];
  activeTaskFilterType = new BehaviorSubject<TaskListFilterType>('all');

  constructor(private taskService: TaskService) {
    this.tasks = taskService.getTasks();
    this.filteredTasks = combineLatest([
      this.tasks,
      this.activeTaskFilterType,
    ]).pipe(
      map(([tasks, activeTaskFilterType]) => {
        return tasks.filter((task: Task) => {
          if (activeTaskFilterType === 'all') {
            return true;
          } else if (activeTaskFilterType === 'open') {
            return !task.done;
          } else {
            return task.done;
          }
        });
      })
    );
  }

  ngOnInit(): void {}

  public activateFilterType(type: string) {
    this.activeTaskFilterType.next(type as TaskListFilterType);
  }

  public addTask(title: string) {
    const task: Task = {
      title,
      done: false,
    };
    this.taskService.addTask(task);
  }

  public updateTask(task: Task): void {
    this.taskService.updateTask(task);
  }
}

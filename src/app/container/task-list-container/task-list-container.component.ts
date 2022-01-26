import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task, TaskListFilterType } from 'src/app/shared/models/task.interface';
import { TaskService } from 'src/app/tasks/task.service';

@Component({
  selector: 'tks-task-list-container',
  templateUrl: './task-list-container.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListContainerComponent {
  tasks: Observable<Task[]>;
  filteredTasks: Observable<Task[]>;
  taskFilterTypes: TaskListFilterType[] = ['all', 'done', 'open'];
  activeTaskFilterType = new BehaviorSubject<TaskListFilterType>('all');

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
    this.filteredTasks = combineLatest([
      this.tasks,
      this.activeTaskFilterType,
    ]).pipe(
      map(([tasks, activeTaskFilterType], index) => {
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

  activateFilterType(type: string) {
    this.activeTaskFilterType.next(type as TaskListFilterType);
  }

  addTask(title: string): void {
    const task: Task = {
      title,
      done: false
    };
    this.taskService.addTask(task);
  }

  updateTask(task: Task): void {
    this.taskService.updateTask(task);
  }
}

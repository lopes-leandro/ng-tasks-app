import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task, TaskListFilterType } from 'src/app/shared/models/task.interface';
import { TaskService } from '../task.service';

@Component({
  selector: 'tks-task-list',
  templateUrl: './task-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent {
  @Input() tasks: Task[] | null = [];
  @Input() taskFilterTypes: TaskListFilterType[] = [];
  @Input() activeTaskFilterType: TaskListFilterType | null = 'all';
  @Output() outAddTask = new EventEmitter<string>();
  @Output() outActivateFilterType = new EventEmitter<TaskListFilterType>();
  @Output() outUpdateTask = new EventEmitter<Task>();

  constructor() {}

  public activateFilterType(type: string) {
    this.outActivateFilterType.emit(type as TaskListFilterType);
  }

  public addTask(title: string) {
    this.outAddTask.emit(title);    
  }

  public updateTask(task: Task): void {
    this.outUpdateTask.emit(task);
  }
}

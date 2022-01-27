import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { ProjectService } from 'src/app/project/project.service';
import { Project } from 'src/app/shared/models/project.interface';
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
  selectedProject: Observable<Project | undefined>;

  constructor(
    private taskService: TaskService,
    private projectService: ProjectService
  ) {
    this.selectedProject = this.projectService.getSelectedProject();

    this.tasks = this.selectedProject.pipe(
      switchMap((project) => this.taskService.getProjectTasks(project?.id))
    )
    
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
    this.selectedProject
      .pipe(
        take(1)
      ).subscribe((project) => {
        const task: Task = {
          projectId: project?.id,
          title,
          done: false
        };
        this.taskService.addTask(task);
      });
  }

  updateTask(task: Task): void {
    this.taskService.updateTask(task);
  }
}

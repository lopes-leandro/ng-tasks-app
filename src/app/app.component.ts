import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProjectService } from './project/project.service';
import { Project } from './shared/models/project.interface';
import { Task } from './shared/models/task.interface';
import { User } from './shared/models/user.interface';
import { TaskService } from './tasks/task.service';
import { UserService } from './user/user.service';

@Component({
  selector: 'tks-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  projects: Observable<Project[]>;
  selectedProject: Observable<Project | undefined>;
  openTasksCount!: Observable<number>;
  user!: Observable<User | null>

  constructor(
    private projectService: ProjectService,
    private taskListService: TaskService,
    private userService: UserService) {

    this.projects = projectService.getProjects();
    this.selectedProject = this.projectService.getSelectedProject();
    this.openTasksCount = this.taskListService.getTasks().pipe(
      map((tasks: Task[]) => {
        return tasks.filter((task) => !task.done).length;
      })
    );
    this.user = this.userService.getCurrentUser();
  }

  public selectProject(id: number): void {
    this.projectService.selectProject(id);
  }
}

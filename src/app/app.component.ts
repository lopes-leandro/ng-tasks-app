import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from './project/project.service';
import { Project } from './shared/models/project.interface';

@Component({
  selector: 'tks-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  projects: Observable<Project[]>;
  selectedProject: Observable<Project | undefined>;

  constructor(private projectService: ProjectService) {
    this.projects = projectService.getProjects();
    this.selectedProject = this.projectService.getSelectedProject();
  }

  public selectProject(id: number): void {
    this.projectService.selectProject(id);
  }
}

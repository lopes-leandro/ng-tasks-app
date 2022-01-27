import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/project/project.service';
import { Project } from 'src/app/shared/models/project.interface';

@Component({
  selector: 'tks-project-container',
  templateUrl: './project-container.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectContainerComponent implements OnInit {

  selectedProject: Observable<Project | undefined>;

  constructor(private projectService: ProjectService) {
    this.selectedProject = this.projectService.getSelectedProject();
   }

  ngOnInit(): void {
  }

}

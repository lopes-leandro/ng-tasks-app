import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/project/project.service';
import { Project } from 'src/app/shared/models/project.interface';
import { Tab } from 'src/app/shared/models/tab.interface';

@Component({
  selector: 'tks-project-container',
  templateUrl: './project-container.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectContainerComponent implements OnInit {

  selectedProject: Observable<Project | undefined>;
  tabs: Tab[] = [
    {id: 'tasks', title: 'Tasks'},
    {id: 'comments', title: 'Comments'},
    {id: 'activities', title: 'Activities'},
  ];
  activeTab: Tab = this.tabs[0];


  constructor(private projectService: ProjectService) {
    this.selectedProject = this.projectService.getSelectedProject();
   }

  ngOnInit(): void {
  }

  public activateTab(tab: Tab): void {
    this.activeTab = tab;  
  }

  updateProject(project: Project): void {
    this.projectService.updateProject(project);
  }

}

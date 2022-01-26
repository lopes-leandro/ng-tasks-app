import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../shared/models/project.interface';

@Injectable()
export class ProjectService {
  private projects = new BehaviorSubject<Project[]>([]);
  private selectedProjectId = new BehaviorSubject<number>(1);
  private selectedProject: Observable<Project | undefined>;

  constructor(private http: HttpClient) {
    this.loadProjects();
    this.selectedProject = combineLatest([
      this.projects,
      this.selectedProjectId,
    ]).pipe(
      map(([projects, selectedProjectId]) =>
        projects.find((project) => project.id === selectedProjectId)
      )
    );
  }

  private loadProjects(): void {
    this.http.get<Project[]>('/api/projects')
      .subscribe((projects) => this.projects.next(projects));
  }

  public selectProject(id: number): void {
    this.selectedProjectId.next(id);
  }

  public getSelectedProject(): Observable<Project | undefined> {
    return this.selectedProject;
  }
}

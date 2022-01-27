import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseService, Task } from '../shared/models/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService implements BaseService {
  tasks = new BehaviorSubject<Task[]>([]);

  constructor(private http: HttpClient) {
    this.loadTasks();
  }

  public getProjectTasks(projectId: number | undefined): Observable<Task[]> {
    return this.tasks.asObservable()
      .pipe(
        map((tasks) => tasks.filter((task) => task.projectId === projectId))
      );
  }

  private loadTasks() {
    this.http
      .get<Task[]>('/api/tasks')
      .subscribe((tasks) => this.tasks.next(tasks));
  }

  public getTasks(): Observable<Task[]> {
    return this.tasks.asObservable();
  }

  public addTask(task: Task): Subscription {
    return this.http
      .post<Task>('/api/tasks', task)
      .subscribe(() => this.loadTasks());
  }

  public updateTask(task: Task): Subscription {
    return this.http
      .post(`/api/tasks/${task.id}`, task)
      .subscribe(() => this.loadTasks());
  }
}

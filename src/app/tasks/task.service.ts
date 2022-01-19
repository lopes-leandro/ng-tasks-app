import { Injectable } from '@angular/core';
import { TaskInterface } from '../shared/models/task-interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: TaskInterface[] = [
    {id: 1, title: 'Tarefa 1', done: false},
    {id: 2, title: 'Tarefa 2', done: true},
    {id: 3, title: 'Tarefa 3', done: false},
    {id: 4, title: 'Tarefa 4', done: true},
  ]

  constructor() { }

  public getTasks(): TaskInterface[] {
    return this.tasks.slice();
  }

  public addTask(task: TaskInterface): void {
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1
    });
  }

  public updateTask(task: TaskInterface): void {
    const index = this.tasks.findIndex((t) => t.id === task.id);
    this.tasks[index] = task
  }
}

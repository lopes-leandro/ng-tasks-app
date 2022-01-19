import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tks-task-list',
  templateUrl: './task-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent implements OnInit {

  tasks = [
    {id: 1, title: 'Tarefa 1', done: false},
    {id: 2, title: 'Tarefa 2', done: true}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public addTask(title: string){
    this.tasks.push({
      title: title, 
      done: false,
      id: this.tasks.length + 1
    })
  }
}

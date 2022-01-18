import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tks-task-list',
  templateUrl: './task-list.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent implements OnInit {

  tasks = [
    {id: 1, title: 'Task 1', done: false},
    {id: 2, title: 'Task 2', done: true}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tks-task',
  templateUrl: './task.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent implements OnInit {

  @Input('task') task: any;

  constructor() { }

  ngOnInit(): void {
  }

}

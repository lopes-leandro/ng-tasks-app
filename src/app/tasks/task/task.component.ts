import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { TaskInterface } from 'src/app/shared/models/task-interface';

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

  @HostBinding('class.done')
  public get done() {
    return this.task && this.task.done;
  }

  

}

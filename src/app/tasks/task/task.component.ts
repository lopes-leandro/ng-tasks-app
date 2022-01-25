import { Component, EventEmitter, HostBinding, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Task} from 'src/app/shared/models/task.interface';

@Component({
  selector: 'tks-task',
  templateUrl: './task.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent implements OnInit {

  @Input('task') task: any;
  @Output() outUpdateTask = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

  updateTask(done: boolean) {
    this.outUpdateTask.emit({
      ...this.task,
      done
    });
  }

  @HostBinding('class.done')
  public get done() {
    return this.task && this.task.done;
  }

  

}

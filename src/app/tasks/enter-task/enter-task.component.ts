import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tks-enter-task',
  templateUrl: './enter-task.component.html',
  encapsulation: ViewEncapsulation.None
})
export class EnterTaskComponent implements OnInit {

  @Output('outEnterTask') outEnterTask = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public enterTask(titleInput: HTMLInputElement): void {
    console.log(titleInput.value);
    
    this.outEnterTask.emit(titleInput.value);
    titleInput.value = '';
    titleInput.focus();
  }

}

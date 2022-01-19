import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'tks-checkbox',
  templateUrl: './checkbox.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class CheckboxComponent {
  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Output() outCheck = new EventEmitter<boolean>();

  constructor() {}

  public check(event: any): void {
    this.outCheck.emit(event?.target.checked);
  }
}

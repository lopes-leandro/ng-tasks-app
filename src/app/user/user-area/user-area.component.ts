import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user.interface';

@Component({
  selector: 'tks-user-area',
  templateUrl: './user-area.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAreaComponent {

  @Input() user!: User | null | undefined;
  @Input() openTasksCount: number | null = 0;
  
  constructor() { }

}

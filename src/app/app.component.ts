import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tks-root',
  template: `
    <tks-task-list-container></tks-task-list-container>
    <router-outlet></router-outlet>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'ng-tasks-app';
}

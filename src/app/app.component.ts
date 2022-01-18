import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tks-root',
  template: `
  <tks-task-list></tks-task-list>
  <router-outlet></router-outlet>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'ng-tasks-app';
}

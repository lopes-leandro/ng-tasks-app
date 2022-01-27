import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tks-root',
  template: `
    <tks-project></tks-project>
    <router-outlet></router-outlet>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'ng-tasks-app';
}

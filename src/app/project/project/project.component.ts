import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Project } from 'src/app/shared/models/project.interface';
import { Tab } from 'src/app/shared/models/tab.interface';

@Component({
  selector: 'tks-project',
  templateUrl: './project.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent implements OnInit {
  @Input() project: Project | null | undefined;
  @Input() tabs: Tab[] | null | undefined;
  @Input() activeTab: Tab | null | undefined;
  @Output() outActivateTab = new EventEmitter<Tab>();

  constructor() {}

  ngOnInit(): void {}

  public activateTab(tab: Tab) {
    this.outActivateTab.emit(tab);
  }
}

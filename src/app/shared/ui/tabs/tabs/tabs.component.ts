import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Tab } from 'src/app/shared/models/tab.interface';

@Component({
  selector: 'tks-tabs',
  templateUrl: './tabs.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements OnInit {
  @Input() tabs: Tab[] | null | undefined;
  @Input() activeTab: Tab | null | undefined;
  @Output() outActivateTab = new EventEmitter<Tab>();

  constructor() {
    this.tabs = [];
    this.activeTab = { id: '', title: '' };
  }

  ngOnInit(): void {}

  public activateTab(tab: Tab) {
    this.outActivateTab.emit(tab);
  }
}

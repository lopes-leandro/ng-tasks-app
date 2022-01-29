import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'tks-navigation-item',
  templateUrl: './navigation-item.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationItemComponent implements OnInit {

  @Input() title: string = '';
  @Input() navId: number | undefined = 0;
  @Output() outActivateNavigationItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click')
  public activateNavigationItem(): void {
    this.outActivateNavigationItem.emit(this.navId);
  }

}

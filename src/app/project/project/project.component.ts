import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { Project } from 'src/app/shared/models/project.interface';

@Component({
  selector: 'tks-project',
  templateUrl: './project.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent implements OnInit {

  @Input() project: Project;

  constructor() { 
    this.project = {
      title: '',
      description: ''
    }
  }

  ngOnInit(): void {
  }

}

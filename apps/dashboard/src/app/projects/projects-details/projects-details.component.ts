import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Project} from "@workshop/core-data";

@Component({
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss']
})
export class ProjectsDetailsComponent {
  currentProject:Project;
  originalTitle;

  @Output() saved= new EventEmitter();
  @Output() cancelled= new EventEmitter();

  @Input()set project(value)
  {
    this.currentProject=Object.assign({},value);
    if (value)
      this.originalTitle=value.title;
  }
}

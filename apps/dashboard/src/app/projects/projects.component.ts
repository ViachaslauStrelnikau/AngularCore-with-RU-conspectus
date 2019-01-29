import {Component, OnInit} from '@angular/core';
import {Project, ProjectsService} from "@workshop/core-data";
import {Observable} from "rxjs";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  primaryColor = 'red';
  projects$;
  selectedProject: Project;

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.getProjects();
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  getProjects() {

    this.projects$=this.projectsService.all();
    // this.projectsService.all()
    //   .subscribe((result:any)=>this.projects=result);
  }

  deleteProject(project)
    {
      this.projectsService.delete(project.id).subscribe(resulet=>this.getProjects());
    }
  createProject(project)
  {
    this.projectsService.create(project).subscribe(result=>this.getProjects());
  }

  updateProject(project)
  {
    this.projectsService.update(project).subscribe(result=>this.getProjects());
  }

  cancel() {
    this.selectProject(null);
  }
}

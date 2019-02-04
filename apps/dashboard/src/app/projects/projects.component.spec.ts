import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectsComponent} from './projects.component';
import {ProjectsListComponent} from "./projects-list/projects-list.component";
import {ProjectsDetailsComponent} from "./projects-details/projects-details.component";
import {MaterialModule} from "@workshop/material";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DebugElement} from "@angular/core";
import {Project, ProjectsService} from "@workshop/core-data";
import {By} from "@angular/platform-browser";
import {noop} from "rxjs";

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let de: DebugElement;
  let projectService: ProjectsService;

  const mockprojectService = {
    // mock yourself out
    all() {
      return noop()
    }
  };

  const emptyProject: Project = {
    id: null,
    title: '',
    details: '',
    percentComplete: 0,
    approved: false,
  };

// instantiate test bed

  beforeEach(() => {
    // instantiate the fixture
    fixture = TestBed.configureTestingModule(
      {
        declarations: [
          ProjectsComponent,
          ProjectsListComponent,
          ProjectsDetailsComponent
        ],
        providers: [
          {provide: ProjectsService, useValue: mockprojectService}
        ],
        imports: [
          MaterialModule,
          FormsModule,
          HttpClientModule,
          BrowserAnimationsModule
        ]
      }).createComponent(ProjectsComponent);

    // get the component instance - the component lives on
    component = fixture.componentInstance;
    // get the debug element
    de = fixture.debugElement;
    //get service instance
    projectService = de.injector.get(ProjectsService);

    // manually force change detection
    fixture.detectChanges();
  });
// test 1
  it('Should have primary color of "red"', () => {
    expect(component.primaryColor).toBe('red')
  });
// test 2
  it('shoud select project', () => {
    component.selectProject(emptyProject);
    expect(component.selectedProject).toBe(emptyProject);
  });

  // test  3 debug element

  it('should display primaryColor', () => {
    const h1 = de.query(By.css('h1'));
    expect(h1.nativeElement.innerText).toBe('red');
  });
// test 4
  it('shpild update new primaryColor', () => {
    const h1 = de.query(By.css('h1'));
    // changing color
    component.primaryColor = 'black';
    // manually force change detection
    fixture.detectChanges();
    expect(h1.nativeElement.innerText).toBe('black');
  })
});

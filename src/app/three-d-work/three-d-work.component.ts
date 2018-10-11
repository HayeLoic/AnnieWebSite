import { Component, OnInit } from '@angular/core';
import { Project } from './project'
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-three-d-work',
  templateUrl: './three-d-work.component.html',
  styleUrls: ['./three-d-work.component.css']
})

export class ThreeDWorkComponent implements OnInit {
  projects = null;
  projectsRepository: string = 'assets/three-d-work/';
  projectsSettingsFileName: string = 'projects-settings.json';
  selectedProject = null;
  hoveredProject = null;

  constructor(public sanitizer: DomSanitizer, private http: HttpClient) { }

  setImageLocation(project: Project): Project {
    for (let image of project.images) {
      image.location = project.repository + image.fileName;
    }
    return project;
  }

  prepareProjects(projects: Project[]): Project[] {
    for (let project of projects) {
      project = this.setImageLocation(project);
      project.imageMiniature.location = project.repository + project.imageMiniature.fileName;
      project.vimeoLinkSafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(project.vimeoLink);
    }
    return projects;
  }

  setSelectedProject(project: Project): void {
    this.selectedProject = project;
  }

  sortProjectsById(projects: Project[]): Project[] {
    return projects.sort(function (a, b) { return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0); });
  }

  setHoveredProject(project: Project): void {
    this.hoveredProject = project;
  }

  isSelectedOrHoveredProject(project: Project): boolean {
    return this.selectedProject == project || this.hoveredProject == project;;
  }

  getProjects(): Observable<any> {
    return this.http.get(this.projectsRepository + this.projectsSettingsFileName);
  }

  initializeProjects(projects: Project[]): Project[] {
    let initializedProjects: Project[] = this.sortProjectsById(projects);
    this.prepareProjects(initializedProjects);
    return initializedProjects;
  }

  ngOnInit() {
    this.getProjects().subscribe(
      projectsJson => this.projects = this.initializeProjects(projectsJson)
    );
  }
}

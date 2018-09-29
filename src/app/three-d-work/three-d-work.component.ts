import { Component, OnInit } from '@angular/core';
import { Project } from './project'
import { ProjectsSettings } from './projects-settings';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-three-d-work',
  templateUrl: './three-d-work.component.html',
  styleUrls: ['./three-d-work.component.css']
})

export class ThreeDWorkComponent implements OnInit {
  projects = null;
  selectedProject = null;
  hoveredProject = null;

  constructor(public sanitizer: DomSanitizer) { }

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

  ngOnInit() {
    this.projects = ProjectsSettings.GetProjects();
    this.projects = this.sortProjectsById(this.projects);
    this.prepareProjects(this.projects);
  }
}

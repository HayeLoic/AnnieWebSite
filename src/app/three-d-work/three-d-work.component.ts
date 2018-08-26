import { Component, OnInit } from '@angular/core';
import { Project } from './project'
import { ProjectsSettings } from './projects-settings';

@Component({
  selector: 'app-three-d-work',
  templateUrl: './three-d-work.component.html',
  styleUrls: ['./three-d-work.component.css']
})
export class ThreeDWorkComponent implements OnInit {
  projects = null;
  selectedProject = null;

  setImageLocation(project: Project): Project {
    for (let image of project.images) {
      image.location = project.repository + image.fileName;
    }
    return project;
  }

  prepareProjects(projects: Project[]): Project[] {
    for (let project of projects) {
      project = this.setImageLocation(project);
    }
    return projects;
  }

  setSelectedProject(project: Project): void {
    this.selectedProject = project;
  }

  constructor() { }

  ngOnInit() {
    this.projects = ProjectsSettings.GetProjects();
    this.prepareProjects(this.projects);
  }
}

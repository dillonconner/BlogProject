import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from '../project-data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects;

  constructor(projects:ProjectDataService) { 
    this.projects = projects.getPosts();
  }

  ngOnInit(): void {
  }

}

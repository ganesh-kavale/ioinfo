import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  projects:any;

  constructor(private projectsService: ProjectsService){}
  ngOnInit(): void {

    this.projectsService.getProjects().subscribe(res=>{

      console.log("Projects loaded: " + res);
      this.projects=res;
      
    });

  }

}

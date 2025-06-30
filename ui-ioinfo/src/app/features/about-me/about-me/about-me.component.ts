import { Component, OnInit } from '@angular/core';
import { PersonalDetailsService } from '../../../../services/personal-details.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit {

  constructor(private personalInfoService: PersonalDetailsService){

  }
  ngOnInit(): void {
    this.personalInfoService.getPersonalInformation().subscribe(res=>{

      console.log("Navigation nodes: " + res);
      
    });
  }

  


  
}

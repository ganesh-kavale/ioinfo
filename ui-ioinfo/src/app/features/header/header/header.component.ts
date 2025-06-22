import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { environment } from '../../../../environments/environment';
import { MatMenuModule } from '@angular/material/menu';
import { NavigationNodesService } from '../../../../services/navigation-nodes.service';


interface Food {
  value: string;
  viewValue: string;
  searchText: string;


}
interface Employee {

  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnInit {

  navigationNodes:any;
  email:any='ganeshkavale27@gmail.com';
  mobile:any='+91 9067609181';
  pipe:any=' | ';

  displayDropdown = false;


  constructor(private navigationNodesService: NavigationNodesService, private cd:ChangeDetectorRef){}
  ngOnInit(): void {

    this.navigationNodesService.getNavigationNodes().subscribe(res=>{

      console.log("Navigation nodes: " + res);

      this.navigationNodes=res;
      
    });

  }

  normaliseDropdown(){

    this.displayDropdown=false;
  }

  showDropdown(){

    this.displayDropdown=true
  }

 
}

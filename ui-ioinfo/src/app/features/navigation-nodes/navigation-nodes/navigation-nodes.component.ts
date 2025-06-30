import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationNodesService } from '../../../../services/navigation-nodes.service';

@Component({
  selector: 'app-navigation-nodes',
  templateUrl: './navigation-nodes.component.html',
  styleUrl: './navigation-nodes.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class NavigationNodesComponent implements OnInit {

  constructor(private navigationNodesService: NavigationNodesService){}
  ngOnInit(): void {

    this.navigationNodesService.getNavigationNodes().subscribe(res=>{

      console.log("Navigation nodes: " + res);
      
    });

  }

}

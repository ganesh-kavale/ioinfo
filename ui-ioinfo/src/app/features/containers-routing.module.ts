import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { AboutMeComponent } from './about-me/about-me/about-me.component';
import { CommonsblogComponent } from './commonsblog/commonsblog/commonsblog.component';
import { HomepageContentComponent } from './homepage-content/homepage-content/homepage-content.component';
import { GalleryComponent } from './gallery/gallery/gallery.component';
import { MemoirNoteComponent } from '../memoir-note/memoir-note/memoir-note.component';
import { AuthGuard } from '../guards/auth.guard';
import { UserRegistrationComponent } from './user-registration/user-registration/user-registration.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomepageComponent,

    // children: [
      // {
      //   path: '',
      //   redirectTo: 'timesheet',
      //   pathMatch: 'full',
      // },
      // {
      //   path: 'timesheet',
      //   component: TimesheetComponent,
      // },
      // {
      //   path: 'history',
      //   component: TimeEntriesHistoryComponent,
      // },
      // {
      //   path: 'dashboard',
      //   component: HrDashboardComponent,
      // },
      // {
      //   path: 'organization',
      //   component: OrganizationComponent,
      // },
      // {
      //   path: 'projects',
      //   component: ProjectsComponent,
      // },
      // {
      //   path: 'employees',
      //   component: EmployeesComponent,
      // },
      // {
      //   path: 'entries',
      //   component: TimeEntriesComponent,
      // },
      // {
      //   path: 'tool-request',
      //   component: ToolRequestComponent,
      //   // canActivate: [RolesGuard],
      //   // data: { roles: [1, 2, 3] }
      // },
      // {
      //   path: 'workflowdashboard',
      //   component: WorkflowDashboardComponent,
      // },
      // {
      //   path: 'employee-allocation',
      //   component: EmployeeAllocationComponent,
      // },

      // {
      //   path: 'time-entry-dashboard',
      //   component: TimeEntryDashboardComponent,
      // },
      // {
      //   path: 'time-entry-status',
      //   component: TimeEntryStatusComponent,
      // },
      // {
      //   path: 'health-dashboard',
      //   component: HealthDashboardComponent,
      //   // canActivate: [RolesGuard],
      //   // data: { roles: [1, 2, 3] }
      // },
      // {
      //   path: 'chart',
      //   component: ChartComponent,
      // },

      // {
      //   path: 'asset-allocation',
      //   component: AssetAllocationComponent,
      //   // canActivate: [RolesGuard],
      //   // data: { roles: [1, 2, 3] }
      // },

      // {
      //   path: 'asset-type',
      //   component: AssetTypeComponent,
      //   // canActivate: [RolesGuard],
      //   // data: { roles: [1, 2, 3] }
      // },

      // // {
      // //   path: 'marketing',
      // //   component: MarketingComponent,
      // // },
      // // {
      // //   path: 'request-status',
      // //   component: RequestStatusComponent,
      // // },
  //   ],
  // },

  {
    path: '',
    component: HomepageComponent,
    children: [
      
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomepageContentComponent,
        // canActivate: [RolesGuard],
        // data: { roles: [1, 2, 3, 4, 5, 6] }
      },
        // {
        //   path: 'about-me',
        //   redirectTo: 'memoir',
        //   component: MemoirNoteComponent
        // },
        {
          path: 'blogs',
          component: CommonsblogComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'gallery',
          component: GalleryComponent
        },
            {
          path: 'user-registration',
          component: UserRegistrationComponent
        },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContainersRoutingModule {}

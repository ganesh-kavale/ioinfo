import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainersRoutingModule } from './containers-routing.module';
import { EmployeeListModule } from './employee-list/employee-list.module';
import { HomepageModule } from './homepage/homepage.module';
import { AppInfoModule } from './app-info/app-info.module';
import { HomepageContentModule } from './homepage-content/homepage-content.module';
import { TopHeaderModule } from './top-header/top-header.module';
import { GalleryModule } from './gallery/gallery.module';
import { MaterialsModule } from '../materials/materials.module';
import { CommonsblogModule } from './commonsblog/commonsblog.module';
import { UserRegistrationModule } from './user-registration/user-registration.module';
import { ProjectsModule } from './projects/projects.module';

@NgModule({
  declarations: [    
          
  ],
  imports: [
    CommonModule,
    EmployeeListModule,
    HomepageModule,
    ContainersRoutingModule,
    AppInfoModule,
    HomepageContentModule,
    TopHeaderModule,
    GalleryModule,
    MaterialsModule,
    CommonsblogModule,
    UserRegistrationModule,
    ProjectsModule
  ]
})
export class ContainersModule { }

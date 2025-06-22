import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MemoirNoteComponent } from '../memoir-note/memoir-note/memoir-note.component';

const routes: Routes = [

  {
    path: 'about-me',
    component: MemoirNoteComponent,
    children: [
      
      {
        path: 'about-me',
        redirectTo: 'memoir',
        pathMatch: 'full',
      },
      {
        path: 'memoir',
        component: MemoirNoteComponent,
        // canActivate: [RolesGuard],
        // data: { roles: [1, 2, 3, 4, 5, 6] }
      },
        // {
        //   path: 'about-me',
        //   redirectTo: 'memoir',
        //   component: MemoirNoteComponent
        // }
        // {
        //   path: 'blogs',
        //   component: CommonsblogComponent
        // },
        // {
        //   path: 'gallery',
        //   component: GalleryComponent
        // },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemoirRoutingModule {}

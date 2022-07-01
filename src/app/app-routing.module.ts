import { WarsComponent } from './wars/wars.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WarFormComponent } from './war-form/war-form.component';
import { CommonModule } from '@angular/common';


const routes = [
  {
    path: 'wars',
    component: WarsComponent,
    children: [
      {
        path: 'create',
        component: WarFormComponent
      },
      {
        path: ':warId',
        children: [
          {
            path: 'update',
            component: WarFormComponent
          },
          {
            path: 'read',
            component: WarFormComponent
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'update'
          }
        ]
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'create'
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'wars'
  }
];
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from '@app/shell/shell.service';
import { AuthenticationGuard } from '@app/auth';

import { AdminHomeComponent } from './admin-home.component';
import { AddComponent } from '@app/add/add.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'adminHome',
      component: AdminHomeComponent,
      data: { title: marker('Admin') },
      canActivate: [AuthenticationGuard],
    },
    { path: 'add', component: AddComponent, data: { title: marker('AddDetails') }, canActivate: [AuthenticationGuard] },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AdminHomeRoutingModule {}

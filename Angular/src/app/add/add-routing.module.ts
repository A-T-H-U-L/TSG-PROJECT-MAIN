import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from '@app/shell/shell.service';
import { AuthenticationGuard } from '@app/auth';
import { AddComponent } from './add.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'add', component: AddComponent, data: { title: marker('AddDetails') }, canActivate: [AuthenticationGuard] },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AddRoutingModule {}

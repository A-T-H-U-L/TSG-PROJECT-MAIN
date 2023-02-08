import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';


import { Shell } from '@app/shell/shell.service';
import { AuthenticationGuard } from '@app/auth';
import { ViewComponent } from './view.component';


const routes: Routes = [
  Shell.childRoutes([

    { path: 'view/:id', component: ViewComponent, data: { title: marker('View') },canActivate:[AuthenticationGuard] },
   
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ViewRoutingModule {}

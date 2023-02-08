import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';

import { AdminHomeComponent } from './admin-home.component';
import { AddRoutingModule } from '@app/add/add-routing.module';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule,AddRoutingModule],
  declarations: [AdminHomeComponent],
})
export class ViewModule {




  
}

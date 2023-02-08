import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';

import { ViewComponent } from './view.component';
import { ViewRoutingModule } from './view-routing.module';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule,ViewRoutingModule],
  declarations: [ViewComponent],
})
export class ViewModule {




  
}

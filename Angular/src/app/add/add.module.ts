import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';

import { AddComponent } from './add.component';
import { AddRoutingModule } from './add-routing.module';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule,AddRoutingModule],
  declarations: [AddComponent],
})
export class HomeModule {




  
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';


import { I18nModule } from '@app/i18n';
import { AuthModule } from '@app/auth';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
@NgModule({
  imports: [CommonModule, TranslateModule, AuthModule, I18nModule, RouterModule],
  declarations: [HeaderComponent,SidebarComponent, ShellComponent],
})
export class ShellModule {}

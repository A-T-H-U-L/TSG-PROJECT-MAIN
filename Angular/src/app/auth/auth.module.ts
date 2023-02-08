import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import * as bcrypt from 'bcryptjs';

import { I18nModule } from '@app/i18n';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from '@app/auth/registration/registration.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, I18nModule, AuthRoutingModule],
  declarations: [LoginComponent,RegistrationComponent],
})
export class AuthModule {}

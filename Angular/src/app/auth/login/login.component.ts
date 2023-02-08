import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { AuthenticationService } from '../authentication.service';
import { CredentialsService } from '@app/auth';
import * as bcrypt from 'bcryptjs';


const log = new Logger('Login');

@UntilDestroy()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // version: string | null = environment.version;
  error: string | undefined;
  // loginForm!: FormGroup;
  // isLoading = false;
  errTrue:boolean=false;
  loginError: boolean = false;
  isLoading: boolean = false;
  loginForm!: FormGroup;
  constructor(
    private _router: Router,
    private _activatedRouter: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private _formBuilder :FormBuilder,
    private _credentialService :CredentialsService,
  ) {
    this.createForm();
  }

  ngOnInit() {

  }
  login() {

    if (this.loginForm.valid) {
      const salt = bcrypt.genSaltSync(10);

const username:string =this.loginForm.value.email
      this.isLoading = true;
      const reqBody= {
        
        'email':username ,
        'password': this.loginForm.value.password

    }
      console.log('this.loginForm.valid', this.loginForm.value);
      this.authenticationService.login(reqBody).subscribe(
        (response) => {
        
          this.isLoading = false;
          console.log('response', response);
          this._credentialService.setCredentials(response)
          console.log('UserRole',response.data.userRole)
          if(response.data.userRole==1){
          this._router.navigate(['/home']);}else if(response.data.userRole==2){
            this._router.navigate(['/adminHome'])
          }
        },
        (error) => {
          this.isLoading = false;
          this.errTrue = true
          console.log('response', error);
        }
      );
    }
   
    
  };

  

  private createForm() {
    this.loginForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}

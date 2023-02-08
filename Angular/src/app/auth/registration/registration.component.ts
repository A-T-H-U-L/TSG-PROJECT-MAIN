import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import * as bcrypt from 'bcryptjs';
import { environment } from '@env/environment';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { AuthenticationService } from '../authentication.service';
import { CredentialsService } from '@app/auth';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  error: string | undefined;
  apiErr:boolean=false;
  loginError: boolean = false;
  isLoading: boolean = false;
  registerForm!: FormGroup;
  errText:string ='';
  hashedPassword: any;
  constructor(
    private _router: Router,
    private _activatedRouter: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private _formBuilder :FormBuilder,
    private _credentialService :CredentialsService,
  ) {

    this.createForm();
  }

  ngOnInit(): void {

  }



  register() {

    if (this.registerForm.valid) {
   
const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(this.registerForm.value.password, salt);
      this.isLoading = true;
      console.log('this.loginForm.valid', this.registerForm.value);
      const requestObj = {
        "name": this.registerForm.value.name,
        "email": this.registerForm.value.email,
        "password": hashedPassword
      }
      this.authenticationService.register(requestObj).subscribe(
        (response) => {
        
          this.isLoading = false;
          console.log('response', response);
      
          this._router.navigate(['/login']);
        },
        (error) => {
          this.isLoading = false;
          this.apiErr = true;
          this.errText = error?.error?.error?.message
          if(!this.errText){
            this.errText="Somthing went Wrong"
          }
          console.log('response', error);
        }
      );
    }
   
    
  };

  

  private createForm() {
    this.registerForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword:['', Validators.required]
    });
  }

}

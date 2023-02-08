import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddService } from './add.service';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';

const log = new Logger('AddDetails');
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  error: string | undefined;

  states: any;
  errTrue: boolean = false;
  loginError: boolean = false;
  isLoading: boolean = false;
  details!: FormGroup;
  constructor(
    private _router: Router,
    private _activatedRouter: ActivatedRoute,
    private _addService: AddService,
    private _formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {}
  add() {
    if (this.details.valid) {
      this.isLoading = true;
      console.log('this.details.valid', this.details.value);
      this._addService.AddTaxPro(this.details.value).subscribe(
        (response) => {
          this.isLoading = false;
          console.log('response', response);

          this._router.navigate(['/adminHome']);
        },
        (error) => {
          this.isLoading = false;
          this.errTrue = true;
          console.log('response', error);
        }
      );
    }
  }

  private createForm() {
    this.details = this._formBuilder.group({
      name: ['', Validators.required],
      consultentType: ['', Validators.required],
      ratePerHour: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
    });
  }
}

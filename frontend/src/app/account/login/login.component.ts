import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService } from '@app/_services';

@Component({ templateUrl: './login.component.html' })
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  // convenience getter
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid){
      return;
    }

    this.loading = true;
    this.accountService.login(this.f['email'].value, this.f['password'].value)
      .pipe(first())
      .subscribe({
        next: () => {
          console.log(this.f);
          this.accountService.isLoggedIn = true;
          this.router.navigateByUrl('/account/profile');
        },
        error: error => {
          console.log(error);
          this.loading = false;
        }
      });
  }

}

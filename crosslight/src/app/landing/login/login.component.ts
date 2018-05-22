import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { LoginService } from './login.service';
import { LOGIN_FORM_STATES } from './login.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  public signinForm: FormGroup;
  public registerForm: FormGroup;
  public loginFormStates = LOGIN_FORM_STATES;
  public loginFormState = LOGIN_FORM_STATES.signin;
  public ngUnsubscriber: Subject<any> = new Subject<void>();
  constructor(public loginSvc: LoginService,
    public router: Router) { }

  ngOnInit() {
    this.initForms();
  }

  // initialise signin and register forms
  initForms() {
    this.signinForm = this.loginSvc.initLoginForm();
    this.registerForm = this.loginSvc.initRegisterForm();
  }

  // switch to signIn / register accordingly
  switchForm(pState: string) {
    this.loginFormState = pState;
  }

  // on login button click
  login() {
    if (this.signinForm.valid) {
      this.loginSvc.login(this.signinForm.value).takeUntil(this.ngUnsubscriber).subscribe((res: any) => {
        if ('SUCCESS' === res.status) {
          this.router.navigate(['home']);
        }
      });
    }
  }

  // on register button click
  register() {
    if (this.registerForm.valid) {
      this.loginSvc.register(this.registerForm.value).takeUntil(this.ngUnsubscriber).subscribe((res: any) => {
        if ('SUCCESS' === res.status) {
          this.router.navigate(['home']);
        }
      });
    }
  }

  ngOnDestroy() {
    try {
      this.ngUnsubscriber.next();
      this.ngUnsubscriber.complete();
    } catch (e) {
      console.warn('ngOnDestroy', e);
    }
  }
}

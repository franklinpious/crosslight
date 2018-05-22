import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import { API_URL } from '../../app.config';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient,
    private fb: FormBuilder) { }

  // inintialise form
  initLoginForm() {
    try {
      const form = this.fb.group({
        username: [null, Validators.required],
        password: [null, Validators.required],
      });
      return form;
    } catch (e) {
      console.warn('initLoginForm', e);
    }
  }

  initRegisterForm() {
    try {
      const form = this.fb.group({
        name: [null, Validators.required],
        email: [null, Validators.required],
        password: [null, Validators.required],
      });
      return form;
    } catch (e) {
      console.warn('initRegisterForm', e);
    }
  }

  // have not used http interceptors sinceno headers or tokens are sent

  login(pFormData) {
    return this.http.post(`${API_URL}/signin/`, pFormData);
  }

  register(pFormData) {
    return this.http.post(`${API_URL}/register/`, pFormData);
  }
}

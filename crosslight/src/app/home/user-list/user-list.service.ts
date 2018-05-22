import { Injectable } from '@angular/core';
import { API_URL } from '../../app.config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserListService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(`${API_URL}/users/`);
  }

}

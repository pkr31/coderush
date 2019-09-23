import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginSubject = new Subject<any>();
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: false
  };
  // options = new RequestOptions({
  //   withCredentials: false
  // });
  constructor(private http: HttpClient) { }

  public login(currentUser: User) {

    let _currentUser = JSON.stringify(currentUser);
    return this.http.post(`${environment.apiUrl}/Login`, currentUser, this.httpOptions)
      .toPromise()
      .catch(this.handleError);

  }
  public logout() {
    return this.http.get(`${environment.apiUrl}/Logout`, this.httpOptions)
      .toPromise()
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}

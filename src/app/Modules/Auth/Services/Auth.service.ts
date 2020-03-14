import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = environment.baseURL + '/Auth/';
  jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  Login(userModel: any) {
    return this.http.post(this.baseURL + 'Login', userModel, httpOptions).pipe(map((response: any) => {
      const user = response;
      if (user) {
        localStorage.setItem('token', user.token);
      }
    }));
  }
  Register(userModel: any) {
    return this.http.post(this.baseURL + 'Register', userModel, httpOptions);
  }
  loggedIn() {
    const token = localStorage.getItem('token');

    return !this.jwtHelper.isTokenExpired(token);
  }
  LogOut() {
    localStorage.removeItem('token');
  }

}

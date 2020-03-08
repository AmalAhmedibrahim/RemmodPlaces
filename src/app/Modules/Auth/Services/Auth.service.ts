import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


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

  constructor(private http: HttpClient) { }
  baseURL = environment.baseURL + '/Auth/';

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

}

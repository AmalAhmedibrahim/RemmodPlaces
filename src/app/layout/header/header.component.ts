import { AlertifyService } from './../../Modules/Shared/Services/Alertify.service';
import { AuthService } from './../../Modules/Auth/Services/Auth.service';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  jwtHelper = new JwtHelperService();
  userName: string;

  constructor(public auth: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedtoken = this.jwtHelper.decodeToken(token);
      console.log(decodedtoken);
      this.userName = decodedtoken.unique_name;
    }
  }
  logOut() {
    this.auth.LogOut();
    this.alertify.message('logged Out');

  }
}

import { AlertifyService } from './../../Shared/Services/Alertify.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/Auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  userModel: any;
  constructor(private authService: AuthService, private alertify: AlertifyService, private router: Router) {
    this.userModel = { UserName: '', PassWord: '' };
  }

  ngOnInit() {
  }
  Login() {
    this.authService.Login(this.userModel).subscribe(next => {
      console.log('login successfully');
      this.alertify.success('login successfully');

    }, error => {
      console.log(error);
      this.alertify.error('login failed');
    }, () => {
      this.router.navigate(['/home']);
    });
  }
  LoggedIn() {
    this.authService.loggedIn();
  }
  LogOut() {
    localStorage.removeItem('token');
    this.alertify.message('logged Out');
    this.router.navigate(['/home']);

  }
}

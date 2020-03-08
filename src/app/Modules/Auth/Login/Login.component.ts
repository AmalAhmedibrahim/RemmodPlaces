import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/Auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  userModel: any;
  constructor(private authService: AuthService) {
    this.userModel = { UserName: '', PassWord: '' };
  }

  ngOnInit() {
  }
  Login() {
    this.authService.Login(this.userModel).subscribe(next => {
      console.log('login successfully');
    }, error => {
      console.log(error);
    });
  }
}

import { AlertifyService } from './../../Shared/Services/Alertify.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/Auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './Registration.component.html',
  styleUrls: ['./Registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userModel: any;
  constructor(private authService: AuthService, private alertify: AlertifyService) {
    this.userModel = { UserName: '', PassWord: '' };
  }

  ngOnInit() {
  }
  Register() {
    this.authService.Register(this.userModel).subscribe((respose: any) => {
      console.log('register successfully');
      this.alertify.success('registerd successfully');
    }, error => {
      console.log(error);
      this.alertify.success(error);

    });
  }
}

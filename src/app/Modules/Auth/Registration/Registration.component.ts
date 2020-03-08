import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/Auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './Registration.component.html',
  styleUrls: ['./Registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userModel: any;
  constructor(private authService: AuthService) {
    this.userModel = { UserName: '', PassWord: '' };
  }

  ngOnInit() {
  }
  Register() {
    this.authService.Register(this.userModel).subscribe((respose: any) => {
      console.log('register successfully');
    }, error => {
      console.log(error);
    });
  }
}

import { RouterModule } from '@angular/router';
import { AlertifyService } from './../Shared/Services/Alertify.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './Auth.component';
import { LoginComponent } from './Login/Login.component';
import { RegistrationComponent } from './Registration/Registration.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    RouterModule
  ],
  declarations: [AuthComponent, LoginComponent, RegistrationComponent],

})
export class AuthModule { }

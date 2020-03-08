
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './Auth.component';
import { LoginComponent } from './Login/Login.component';
import { RegistrationComponent } from './Registration/Registration.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [AuthComponent, LoginComponent, RegistrationComponent]
})
export class AuthModule { }

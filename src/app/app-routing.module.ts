import { HomeComponent } from './Modules/Home/Home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Modules/Auth/Login/Login.component';
import { RegistrationComponent } from './Modules/Auth/Registration/Registration.component';
import { AuthGuard } from './Modules/Shared/Guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

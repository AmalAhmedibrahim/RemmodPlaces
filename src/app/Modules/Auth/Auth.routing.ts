import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/Login.component';
import { RegistrationComponent } from './Registration/Registration.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
];

export const AuthRoutes = RouterModule.forChild(routes);

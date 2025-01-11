import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserGuard } from './guard/user-guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: AuthComponent },
  { path: 'landing', component: LandingPageComponent, canActivate: [UserGuard] },
  { path: '**', redirectTo: 'login' },
];

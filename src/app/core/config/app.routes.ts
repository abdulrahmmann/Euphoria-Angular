import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('../../features/auth/pages/signin/signin').then((mod) => mod.Signin)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('../../features/auth/pages/signup/signup').then((mod) => mod.Signup)
  },
];

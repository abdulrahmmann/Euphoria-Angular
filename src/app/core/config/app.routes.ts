import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    children: [
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
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('../../features/auth/pages/forgot-password/forgot-password').then((mod) => mod.ForgotPassword)
      },
      {
        path: 'check-email',
        loadComponent: () =>
          import('../../features/auth/pages/check-email/check-email').then((mod) => mod.CheckEmail)
      },
      {
        path: 'verification-code',
        loadComponent: () =>
          import('../../features/auth/pages/verification-code/verification-code').then((mod) => mod.VerificationCode)
      },
      {
        path: 'create-new-password',
        loadComponent: () =>
          import('../../features/auth/pages/create-new-password/create-new-password').then((mod) => mod.CreateNewPassword)
      },
    ]
  },

  {
    path: 'dashboard',
    children: [
      {
        path: 'analytics',
        loadComponent: () =>
          import("../../features/analytics/pages/analytics").then((mod) => mod.Analytics)
      },
    ]
  }
];

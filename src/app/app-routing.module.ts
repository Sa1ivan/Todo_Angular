import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { ListComponent } from './components/list/list.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { authGuard } from './guards/auth.guard';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {
    path: 'nav',
    component: NavbarComponent,
    children: [
      {
        path: 'list',
        title: 'list',
        canActivate: [authGuard],
        component: ListComponent
      },
      {
        path: 'about',
        title: 'about',
        component: AboutComponent
      },
      {
        path: 'auth',
        title: 'auth',
        component: AuthComponent
      },
      {
        path: 'signup',
        title: 'signup',
        component: RegistrationComponent
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'nav/auth',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

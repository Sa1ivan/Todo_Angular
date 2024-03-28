import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private router: Router = inject(Router);
  public authSrvs: AuthService = inject(AuthService);

  constructor(private authService: AuthService){}

  checkLogIn()
  {
    if(!this.authService.token) {
      return false;
    }
    return true;
  }

  logOut(){
    this.authSrvs.logout();
  }
}

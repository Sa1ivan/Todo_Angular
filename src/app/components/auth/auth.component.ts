import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent{

  login!: string;
  password!: string;
  private router: Router = inject(Router);
  private authService: AuthService = inject(AuthService);

  constructor(private http: HttpClient) {}

  logIn(login: string, password: string){
    if(!login && password) alert('Введите логин!');
    if(!password && login) alert('Введите пароль!');
    if(!login && !password) alert('Введите логин и пароль!');
    if(login && password)
    {
      this.authService.logIn(login, password);
    }
  }

  signUp(){
    this.router.navigate(['nav/signup']);
  }

}

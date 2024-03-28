import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { inject } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  baseUrl: string = environment.apiUrl;
  private router: Router = inject(Router);
  private subscription: Subscription | null = null;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private routes: Router) {}

  public get user(): User | null {
    const token = localStorage.getItem('user_token');
    if (token) {
      const user: User = this.parseJwt(token);
      return user;
    }
    return null;
  }

  public logIn(email: string, password: string) {
    return this.http.post<{ token: string }>(`${this.baseUrl}/auth/login`, { email, password })
    .pipe(
      map((res) => {
        if (res.token) {
          localStorage.setItem('user_token', res.token);
          this.router.navigate(['nav/list']);
        }
        return null;
      }),
      catchError((): Observable<null> => {
        localStorage.removeItem('user_token');
        return of(null);
      })
    ).subscribe();
  }

  public get token(): string | null {
    const token = localStorage.getItem('user_token');
    return token;
  }

  private parseJwt(token: string): User {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }

  logout() {
    localStorage.removeItem('user_token');
    this.router.navigate(['nav/auth']);
  }

  public signup(data: {login: string, password: string, fullname: string})
  {
    return this.http.post(`${this.baseUrl}/auth/registration`, {email: data.login, password: data.password, fio: data.fullname}, this.httpOptions)
    .pipe(
      tap((res) => {
        console.log(res);
        this.router.navigate(['nav/auth']);
      }),
      catchError((): Observable<null> => {
        return of(null);
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    if(this.subscription) this.subscription?.unsubscribe();
  }
}

import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  login!: string;
  password!: string;
  fullname!: string;
  private authService: AuthService = inject(AuthService);

  sendInfo(login: string, password: string, fullname: string)
  {
    if(login && password && fullname)
    {
      const data = {login, password, fullname};
      this.authService.signup(data);
    }
    else{
      alert("Заполните все поля!");
    }
  }
}

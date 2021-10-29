import { Component, OnInit } from '@angular/core';
import { FieldForm } from 'src/app/components/form/field_form';
import { ParamsForm } from 'src/app/components/form/params_form';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  fields: Array<FieldForm> = [
    {
      name: 'login',
      label: 'Identifiant',
      model: '',
      type: 'text',
      placeholder: 'Identifiant',
      required: true,
    },
    {
      name: 'password',
      label: 'Mot de passe',
      model: '',
      type: 'password',
      placeholder: 'Mot de passe',
      required: true,
    },
  ];

  paramsForm: ParamsForm = {
    name: 'login',
    fields: this.fields,
    nameSubmit: 'Se connecter',
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // console.log('test');
  }

  submitForm(data: any): void {
    this.authService.login(data).subscribe(
      (res: { accessToken: string; }) => {
        this.authService.saveToken(res.accessToken);
        this.authService.saveUser(res);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        // this.reloadPage();
      },
      (err: { error: { message: string; }; }) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}

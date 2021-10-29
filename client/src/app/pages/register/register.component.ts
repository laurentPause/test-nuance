import { Component, OnInit } from '@angular/core';
import { FieldForm } from 'src/app/components/form/field_form';
import { ParamsForm } from 'src/app/components/form/params_form';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fields: Array<FieldForm> = [
    {
      name: 'name',
      label: 'Nom',
      model: '',
      type: 'text',
      placeholder: 'Nom',
      required: true,
    },
    {
      name: 'forename',
      label: 'Prénom',
      model: '',
      type: 'text',
      placeholder: 'Prénom',
      required: true,
    },
    {
      name: 'mail',
      label: 'Email',
      model: '',
      type: 'mail',
      placeholder: 'Email',
      required: true,
    },
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
    name: 'register',
    fields: this.fields,
    nameSubmit: "S'enregistre",
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // console.log('test');
  }

  submitForm(data: any): void {
    this.authService.register(data).subscribe(
      res => {
        console.log(res);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}




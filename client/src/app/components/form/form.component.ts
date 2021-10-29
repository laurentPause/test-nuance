import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ParamsForm } from './params_form';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() params!: ParamsForm;

  @Output() submit = new EventEmitter<any>();

  form!: FormGroup;

  errorSubmit = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.setFields();
  }

  isNotValid(field: string): boolean {
    return this.errorSubmit && !this.form.controls[field].valid;
  }

  setFields(): void {
    let fields = Object();
    this.params.fields.forEach((element) => {
      fields[element.name] = new FormControl(element.model, [
        element.required ? Validators.required : Validators.nullValidator,
      ]);
    });
    this.form = this.formBuilder.group(fields);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    if (this.form.valid) {
      this.errorSubmit = false;
      this.form.controls['login'].valid;
      this.submit.emit(this.form.value);
    } else {
      this.errorSubmit = true;
    }
  }
}

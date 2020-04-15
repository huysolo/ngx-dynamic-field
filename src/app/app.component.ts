import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgxFieldModel } from 'projects/dynamic-field/src/public-api';
import { FieldModel } from 'projects/dynamic-material-field/src/public-api';
import { interval } from 'rxjs';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form =  new FormControl({})
  fields: FieldModel[] = [
    {
      name: 'text',
      label: 'Field',
      type: 'field',
      displayType: 'textField',
      isEditable: true,
    },
    {
      name: 'date',
      label: 'sss',
      type: 'field',
      displayType: 'datePicker',
      isEditable: true,
      isRequired: true
    }
  ];
  nunglonham: boolean;
  constructor() {
    interval(500).subscribe(() => this.nunglonham = this.form.invalid);
    this.form.setValue({
      text: 'xxx',
      date: new Date()
    });
  }
  isDisabled() {
    return this.form.invalid;
  }
}

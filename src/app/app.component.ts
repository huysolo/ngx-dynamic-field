import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgxFieldModel } from 'ngx-dynamic-field';
import { FieldModel } from 'projects/dynamic-material-field/src/public-api';
import { interval } from 'rxjs';
import { skip } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form =  new FormControl()
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
      displayType: 'multiSelect',
      isEditable: true,
      isRequired: true
    }
  ];
  nunglonham: boolean;
  constructor(private http: HttpClient) {
    interval(500).subscribe(() => this.nunglonham = this.form.invalid);
    this.form.setValue({
      text: 'xxx',
      date: []
    });

    this.http.get<{
      LtsItem: Array<{ID: string}>}>('https://thongtindoanhnghiep.co/api/city').subscribe(res => {
      res.LtsItem.forEach(city => {
        this.http.get(`https://thongtindoanhnghiep.co/api/city/${city.ID}/district`).subscribe(res => {
          
        })
      })  
   
    })
  }
  isDisabled() {
    return this.form.invalid;
  }
}

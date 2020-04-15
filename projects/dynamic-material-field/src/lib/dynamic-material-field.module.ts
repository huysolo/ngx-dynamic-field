import { NgModule } from '@angular/core';
import { InputFieldComponent } from './components/fields/input-field/input-field.component';
import { DynamicFieldModule } from 'projects/dynamic-field/src/public-api';
import { DynamicMaterialFieldService } from './dynamic-material-field.service';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';


import { ReactiveFormsModule } from '@angular/forms';

import { TextAreaFieldComponent } from './components/fields/text-area-field/text-area-field.component';
import { MultiselectFieldComponent } from './components/fields/multiselect-field/multiselect-field.component';
import { SelectBoxFieldComponent } from './components/fields/select-box-field/select-box-field.component';
import { DatePickerFieldComponent } from './components/fields/date-picker-field/date-picker-field.component';
import { RadioButtonFieldComponent } from './components/fields/radio-button-field/radio-button-field.component';
import { NumberFieldComponent } from './components/fields/number-field/number-field.component';

const fields = [
  InputFieldComponent,
  TextAreaFieldComponent,
  MultiselectFieldComponent,
  DatePickerFieldComponent,
  SelectBoxFieldComponent,
  RadioButtonFieldComponent,
  NumberFieldComponent
];

const components = [
  fields
];

@NgModule({
  declarations: [
    components,
  ],
  providers: [
    DynamicMaterialFieldService
  ],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    DynamicFieldModule.forRoot(DynamicMaterialFieldService)
  ],
  exports: [
    DynamicFieldModule
  ]
})
export class DynamicMaterialFieldModule { }

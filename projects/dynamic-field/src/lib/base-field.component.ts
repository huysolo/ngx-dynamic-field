import { Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxFieldModel, FieldContent } from './field.model';

export abstract class BaseFieldComponent<FieldModel extends NgxFieldModel = NgxFieldModel> implements FieldContent<FieldModel>{
  @Input() control: FormControl;
  @Input() field: FieldModel;
}
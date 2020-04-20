import { Input } from '@angular/core';
import { NgxFieldModel, FieldContext } from './field.model';

export abstract class BaseFieldComponent<FieldModel extends NgxFieldModel = NgxFieldModel>{
  @Input() context: FieldContext<FieldModel>
}
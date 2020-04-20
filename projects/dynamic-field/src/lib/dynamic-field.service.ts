import { NgxFieldModel, FieldContext } from './field.model';
import { Type } from '@angular/core';
import { BaseFieldComponent } from './base-field.component';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FieldModel } from 'projects/dynamic-material-field/src/public-api';

export interface FieldType<FielModel extends NgxFieldModel = NgxFieldModel> {
  typ: Type<BaseFieldComponent>,
  content: FieldContext<FielModel>
}


export abstract class AbstractGenerateFieldService<T extends NgxFieldModel = NgxFieldModel> {

  abstract getTypeByField(field: T): FieldType<T>;

  generateFields(fields: T[]) {
    return fields.map(field => {
      const fieldType = this.getTypeByField(field);
      
      if (field.isEditable) {
        fieldType.content.control.enable();
      } else {
        fieldType.content.control.disable();
      }

      if (field.isRequired) {
        fieldType.content.control.setValidators([
          Validators.required
        ])
      };

      return fieldType;
    });
  }
}




import { AbstractGenerateFieldService, NgxFieldModel, FieldType, DynamicFormGroupComponent, FieldContext } from 'dynamic-field';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { SelectFieldModel } from './field.model';
import { Inject, Type, Injectable } from '@angular/core';
import {FieldsToken} from './components/fields'
import { BaseFieldComponent } from 'projects/dynamic-field/src/public-api';
export interface FieldModel extends NgxFieldModel {
  displayType?: string;
  fields?: FieldModel[]
}

export interface SelectModel {
  value: string;
  label: string;
}

@Injectable()
export class DynamicMaterialFieldService extends AbstractGenerateFieldService<FieldModel> {
  constructor(@Inject(FieldsToken) private fieldsTokenService: {
    [key: string]: Type<BaseFieldComponent>
  }){
    super();
  }
  getTypeByField(field: FieldModel): FieldType<FieldModel> {
    switch (field.type) {
      case 'field':
        return {
          typ: this.fieldsTokenService[field.displayType],
          content: {
            field,
            control: new FormControl()
          }
        }
      case 'group':
        return {
          typ: DynamicFormGroupComponent,
          content: {
            field,
            control: new FormControl()
          }
        }
    }
    
  }
  

}


export abstract class AbstractFieldConfigService {
  abstract getSelect(context: FieldContext<FieldModel>): Observable<SelectFieldModel[]>;
} 
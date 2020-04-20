import { InjectionToken, Type } from '@angular/core';
import { BaseFieldComponent } from 'ngx-dynamic-field';
export interface FieldMap {
    [key: string]: Type<BaseFieldComponent>
}
export const FieldsToken = new InjectionToken<FieldMap>('fieldsToken');


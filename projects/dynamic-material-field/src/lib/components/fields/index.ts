import { InjectionToken, Type } from '@angular/core';
import { BaseFieldComponent } from 'projects/dynamic-field/src/public-api';

export const FieldsToken = new InjectionToken<{
    [key: string]: Type<BaseFieldComponent>
}>('fieldsToken');
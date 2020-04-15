import { AbstractControl } from '@angular/forms';

export interface NgxFieldModel {
    isRequired?: boolean;
    isEditable: boolean;
    name: string;
    label: string;
    fields?: NgxFieldModel[];
    type: 'field' | 'group';
}

export interface NgxTypeValueModel {
    label: string;
    name: string;
}

export interface FieldContent<FieldModel extends NgxFieldModel = NgxFieldModel> {
    control: AbstractControl,
    field: FieldModel
}
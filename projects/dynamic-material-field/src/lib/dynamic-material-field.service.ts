import { AbstractGenerateFieldService, NgxFieldModel, FieldType, DynamicFormGroupComponent } from 'projects/dynamic-field/src/public-api';
import { FormControl } from '@angular/forms';
import { InputFieldComponent } from './components/fields/input-field/input-field.component';
import { SelectBoxFieldComponent } from './components/fields/select-box-field/select-box-field.component';
import { DatePickerFieldComponent } from './components/fields/date-picker-field/date-picker-field.component';
import { MultiselectFieldComponent } from './components/fields/multiselect-field/multiselect-field.component';
import { TextAreaFieldComponent } from './components/fields/text-area-field/text-area-field.component';
import { RadioButtonFieldComponent } from './components/fields/radio-button-field/radio-button-field.component';
export interface FieldModel extends NgxFieldModel {
  displayType?: string;
  fields?: FieldModel[]
}
export class DynamicMaterialFieldService extends AbstractGenerateFieldService<FieldModel> {
  private displayFields = {
    datePicker: DatePickerFieldComponent,
    selectBox: SelectBoxFieldComponent,
    multiSelect: MultiselectFieldComponent,
    textField: InputFieldComponent,
    textArea: TextAreaFieldComponent,
    radioButton: RadioButtonFieldComponent,
  };
  getTypeByField(field: FieldModel): FieldType<FieldModel> {
    switch (field.type) {
      case 'field':
        return {
          typ: this.displayFields[field.displayType],
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

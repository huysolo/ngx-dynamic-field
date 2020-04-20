import { Component, Input } from '@angular/core';
import { BaseFieldComponent, FieldContext } from 'projects/dynamic-field/src/public-api';
import { AbstractFieldConfigService } from '../../../dynamic-material-field.service';
import { Observable } from 'rxjs';
import { SelectFieldModel } from '../../../field.model';

@Component({
  selector: 'ngx-radio-button-field',
  templateUrl: './radio-button-field.component.html',
  styleUrls: ['./radio-button-field.component.scss']
})
export class RadioButtonFieldComponent extends BaseFieldComponent {
  fieldValues$: Observable<SelectFieldModel[]>;
  @Input() set context(context: FieldContext) {
    this.fieldValues$ = this.abstractFieldConfigService.getSelect(context);
  }
  constructor(private abstractFieldConfigService: AbstractFieldConfigService) {
    super();
  }
}

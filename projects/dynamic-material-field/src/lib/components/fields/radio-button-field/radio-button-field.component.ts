import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BaseFieldComponent, FieldContext } from 'ngx-dynamic-field';
import { AbstractFieldConfigService } from '../../../dynamic-material-field.service';
import { Observable } from 'rxjs';
import { SelectFieldModel } from '../../../field.model';

@Component({
  selector: 'ngx-radio-button-field',
  templateUrl: './radio-button-field.component.html',
  styleUrls: ['./radio-button-field.component.scss']
})
export class RadioButtonFieldComponent extends BaseFieldComponent implements OnChanges {
  fieldValues$: Observable<SelectFieldModel[]>;
  setContext(context: FieldContext) {
    this.fieldValues$ = this.abstractFieldConfigService.getSelect(context);
  }
  constructor(private abstractFieldConfigService: AbstractFieldConfigService) {
    super();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.context && changes.context.currentValue) {
      this.setContext(changes.context.currentValue)
      
    }
  }
}

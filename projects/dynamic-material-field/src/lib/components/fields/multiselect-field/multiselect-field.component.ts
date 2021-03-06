import { Component } from '@angular/core';
import { BaseSelectFieldComponent } from '../base-select-field.component';
import { AbstractFieldConfigService } from '../../../dynamic-material-field.service';

@Component({
  selector: 'ngx-multiselect-field',
  templateUrl: './multiselect-field.component.html',
  styleUrls: ['./multiselect-field.component.scss']
})
export class MultiselectFieldComponent extends BaseSelectFieldComponent {

  constructor(abstractFieldConfigService: AbstractFieldConfigService) {
    super(abstractFieldConfigService);
  }
}

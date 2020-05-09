import { Component } from '@angular/core';
import { BaseSelectFieldComponent } from '../base-select-field.component';
import { AbstractFieldConfigService } from '../../../dynamic-material-field.service';

@Component({
  selector: 'ngx-select-box-field',
  templateUrl: './select-box-field.component.html',
  styleUrls: ['./select-box-field.component.scss']
})
export class SelectBoxFieldComponent  extends BaseSelectFieldComponent  {

  constructor(abstractFieldConfigService: AbstractFieldConfigService) {
    super(abstractFieldConfigService);
  }
}

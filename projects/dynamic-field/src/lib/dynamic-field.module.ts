import { NgModule, ModuleWithProviders, Type } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AbstractGenerateFieldService } from './dynamic-field.service';
import { NgxFieldModel } from './field.model';
import { DynamicFormGroupComponent } from './dynamic-form-group/dynamic-form-group.component';
import { CommonModule } from '@angular/common';
import { NgxdModule } from '@ngxd/core';
import { FormResolverComponent } from './form-resolver/form-resolver.component';

@NgModule({
  declarations: [DynamicFormGroupComponent, FormResolverComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgxdModule
  ],
  exports: [
    DynamicFormGroupComponent,
    FormResolverComponent,
    FormsModule
  ]
})
export class DynamicFieldModule {
  static forRoot<T extends NgxFieldModel = NgxFieldModel>(FieldGenerateServiceType: Type<AbstractGenerateFieldService<T>>): ModuleWithProviders {
    return {
      ngModule: DynamicFieldModule,
      providers: [
        {
          provide: AbstractGenerateFieldService,
          useClass: FieldGenerateServiceType
        }
      ]
    }
  }
}

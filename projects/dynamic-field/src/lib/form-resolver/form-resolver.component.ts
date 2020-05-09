import { Component, Input, forwardRef } from '@angular/core';
import { NgxFieldModel } from '../field.model';
import { AbstractGenerateFieldService, FieldType } from '../dynamic-field.service';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, NG_VALIDATORS, Validator, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { withLatestFrom, map } from 'rxjs/operators';
@Component({
  selector: 'ngx-form-resolver',
  templateUrl: './form-resolver.component.html',
  styleUrls: ['./form-resolver.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormResolverComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormResolverComponent),
      multi: true
    }
  ]
})
export class FormResolverComponent implements ControlValueAccessor, Validator {
  private value$ = new Subject<any>();
  private onChange$ = new Subject<Function>()
  private form = new FormGroup({})

  fieldTypes: FieldType[];

  @Input() set fields(_fields: NgxFieldModel[]) {
    this.fieldTypes = this.dynamicService.generateFields(_fields);

    this.fieldTypes.forEach(fieldType => {
      this.form.addControl(fieldType.content.field.name, fieldType.content.control);
    });

    this.form.valueChanges.pipe(
      withLatestFrom(this.onChange$.asObservable())
    ).subscribe(([value, changeFn]) => {
      changeFn(value)
    });

    this.value$.subscribe(value => {
      this.form.patchValue(value);
    })
  }

  constructor(private dynamicService: AbstractGenerateFieldService) { }

  writeValue(value: any): void {
    this.value$.next(value);
  }
  registerOnChange(fn: Function): void {
    this.onChange$.next(fn);
  }
  registerOnTouched(fn: Function): void {

  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  validate(control: FormControl) {
    if (this.form.valid) {
      return null;
    }
    let errors = this.form.errors;
    for (const controlName in this.form.controls) {
      if (this.form.controls.hasOwnProperty(controlName)) {
        const control = this.form.controls[controlName];
        if (control.errors != null) {
          errors = {
            ...errors,
            ...control.errors
          }
        }
      }
    }
    return errors
  }
  registerOnValidatorChange?(fn: () => void) {
  }


}

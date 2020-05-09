import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicMaterialFieldModule, AbstractFieldConfigService, FieldModel } from 'projects/dynamic-material-field/src/public-api';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FieldContext } from 'ngx-dynamic-field';
import { SelectFieldModel } from 'projects/dynamic-material-field/src/lib/field.model';
import { of } from 'rxjs';

@Injectable()
export class ConfigService extends AbstractFieldConfigService{
  getSelect(context: FieldContext<FieldModel>): import("rxjs").Observable<SelectFieldModel[]> {
    console.log(context)
    return of([
      {
        value: 'xxx',
        label: 'xxxss'
      },
      {
        value: 'xxx2',
        label: 'xxxss'
      },
      {
        value: 'xxx3',
        label: 'xxxss'
      }
    ])
  }
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatButtonModule,
    HttpClientModule,
    DynamicMaterialFieldModule.forConfig(ConfigService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

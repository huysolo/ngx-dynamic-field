import {  Input } from '@angular/core';
import { BaseFieldComponent, FieldContext } from 'dynamic-field';
import { Observable } from 'rxjs';
import { SelectFieldModel } from '../../field.model';
import { FormControl } from '@angular/forms';
import { filter, switchMap, map, startWith } from 'rxjs/operators';
import { AbstractFieldConfigService } from '../../dynamic-material-field.service';

export class BaseSelectFieldComponent extends BaseFieldComponent {
  fieldValues$: Observable<SelectFieldModel[]>;
  searchForm = new FormControl('');
  filterFieldValues$: Observable<SelectFieldModel[]>;
  searchLabel = 'Tìm giá trị';
  noEntriesLabel = 'Không tìm thấy gái trị';
  setContext(context: FieldContext) {
    this.fieldValues$ = this.abstractFieldConfigService.getSelect(context);
    this.filterFieldValues$ = this.fieldValues$.pipe(
      filter(res => res !=  null),
      switchMap(fieldValues => this.searchForm.valueChanges.pipe(
        startWith(''),
        map(search => fieldValues.filter(
          fieldValue => checkStringMatch(fieldValue.label, search)
        )))
      )
    );
  }

  
  constructor(private abstractFieldConfigService: AbstractFieldConfigService) {
    super();
    this.setContext(this.context)
  }



  ngOnInit(): void {
  }

}


/**
 * Hàm xóa dấu tiếng Việt
 * @param str String cần xóa dấu
 */
export function changeAlias(str: string): string {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  str = str.replace(/Đ/g, 'D');
  return str;
}
/**
 * Hàm so sánh 2 string có điểm giống nhau không
 * Dùng để tìm kiếm
 * @param str1
 * @param str2 String cần tìm
 */
export function checkStringMatch(str1: string, str2: string) {
  // return changeAlias(str1.toLocaleLowerCase().trim())
  // .indexOf(changeAlias(str2.toLocaleLowerCase().trim()));
  try {
    return changeAlias(str1.toLocaleLowerCase().trim())
      .search(changeAlias(str2.toLocaleLowerCase().trim())) >= 0;
  } catch (error) {
    return true;
  }
}

export const isMatchString = (str1: string, str2: string) => changeAlias(str1.toLocaleLowerCase().trim()).indexOf(changeAlias(str2.toLocaleLowerCase().trim())) === 0;
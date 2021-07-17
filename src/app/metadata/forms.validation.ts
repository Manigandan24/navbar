/**
 * Reactive forms custom validation
 * 
 */
 import { AbstractControl, ValidationErrors, ValidatorFn,AsyncValidatorFn , NG_VALIDATORS, Validator, FormControl } from '@angular/forms'
 import { Observable, of } from 'rxjs';

 export function isDobValid(control: AbstractControl){

    let v=control.value;
    //if(v!=undefined && )

 }

 export const MY_DATE_FORMATS = {
   parse: {
     dateInput: 'DD-MM-YYYY',
   },
   display: {
     dateInput: 'MMM DD, YYYY',
     monthYearLabel: 'MMMM YYYY',
     dateA11yLabel: 'LL',
     monthYearA11yLabel: 'MMMM YYYY'
   },
}; 
import {ValidatorFn, AbstractControl} from '@angular/forms';

export function AuthorValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        return control.value && control.value.length > 0 ? null : {'forbiddenValue': {value: control.value}} ;
    };
}

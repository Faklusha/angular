import {ValidatorFn, AbstractControl} from '@angular/forms';

export function DurationValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        const isNumber = !isNaN(parseFloat(control.value)) && isFinite(control.value);
        return isNumber ? null : {'forbiddenValue': {value: control.value}} ;
    };
}

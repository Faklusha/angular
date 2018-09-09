import {ValidatorFn, AbstractControl} from '@angular/forms';

const regExp = /^((0[1-9])|(1\d)|(2\d)|(3[0-1]))\/(|(0[1-9])|(1[0-2]))\/((\d{4}))$/;

export function DateValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {

        const allowed = regExp.test(control.value);
        return allowed ? null : {'forbiddenDate': {value: control.value}};
    };
}

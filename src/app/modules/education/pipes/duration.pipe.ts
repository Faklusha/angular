import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'duration',
    pure: false
})
export class DurationPipe implements PipeTransform {
    transform(duration: string) {
        const formattedDuration = Number.parseInt(duration) || 0;
        const hours = formattedDuration / 60;
        const minutes = hours >= 1 ? formattedDuration % 60 : formattedDuration;
        return hours >= 1 ? `${Math.trunc(hours)}h ${minutes}min` : `${minutes}min`;
    }
}

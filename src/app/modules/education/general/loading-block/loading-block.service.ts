import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class LoadingBlockService {

    public isShown = new Subject<boolean>();

    constructor() {
    }

    toggleLoadingBlock(value) {
        this.isShown.next(value);
    }
}

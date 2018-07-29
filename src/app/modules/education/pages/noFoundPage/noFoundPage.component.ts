import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';


@Component({
    selector: 'app-no-found',
    templateUrl: './noFoundPage.component.html',
    styleUrls: ['./noFoundPage.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoFoundPageComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}

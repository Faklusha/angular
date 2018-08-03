import {Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Router, RouterEvent, ActivatedRoute} from '@angular/router';

import {AuthenticationService} from '../services/authentication.service';
import {CourseItem} from '../pages/courses/courseItem/courseItem.model';

@Component({
    selector: 'app-master-page',
    templateUrl: './masterPage.component.html',
    styleUrls: ['./masterPage.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class MasterPageComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }

}

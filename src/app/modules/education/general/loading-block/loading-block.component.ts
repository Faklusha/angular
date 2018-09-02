import {Component, OnInit} from '@angular/core';
import {LoadingBlockService} from './loading-block.service';

@Component({
    selector: 'app-loading-block',
    templateUrl: './loading-block.component.html',
    styleUrls: ['./loading-block.component.css']
})
export class LoadingBlockComponent implements OnInit {
    public isShown: boolean;
    private subscription;

    constructor(private loadingBlockService: LoadingBlockService) {
        this.subscription = loadingBlockService.isShown.subscribe(value => this.isShown = value);
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

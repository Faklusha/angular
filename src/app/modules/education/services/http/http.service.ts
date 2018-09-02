import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {LoadingBlockService} from '../../general/loading-block/loading-block.service';


@Injectable({
    providedIn: 'root'
})
export class HttpService {

    public TOKEN_KEY = 'app_token';
    public BASE_URL = 'http://localhost:3004';

    constructor(private http: HttpClient,
                private loadingBlockService: LoadingBlockService) {
    }

    public handleError(error: HttpErrorResponse) {
        this.loadingBlockService.toggleLoadingBlock(false);
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return throwError(
            'Something bad happened; please try again later.');
    }
}

import {TestBed, inject} from '@angular/core/testing';

import {CoursesListService} from './coursesList.service';
import {HttpClientModule} from '@angular/common/http';

describe('CoursesListService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CoursesListService],
            imports: [HttpClientModule]
        });
    });

    it('should be created', inject([CoursesListService], (service: CoursesListService) => {
        expect(service).toBeTruthy();
    }));
});

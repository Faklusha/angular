import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {CoursesListService} from '../coursesList/coursesList.service';
import {CourseItem} from '../courseItem/courseItem.model';
import {Router, ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromRoot from '../coursesList/reducers/CoursesReducer';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {DurationValidator} from '../../../directives/duration-validator.directive';
import {DateValidator} from '../../../directives/date-validator.directive';
import {Author} from './authors.model';
import {AuthorValidator} from '../../../directives/author-validator.directive';

@Component({
    selector: 'app-add',
    templateUrl: './addCourse.component.html',
    styleUrls: ['./addCourse.component.css'],
})
export class AddCourseComponent implements OnInit {
    public item: CourseItem;
    public id: number;
    private courses$;
    private subscription;
    private courses: CourseItem[];
    public authorsList: Author[];
    public form;

    constructor(private router: Router, private route: ActivatedRoute,
                private coursesListService: CoursesListService,
                private store: Store<fromRoot.State>) {
        this.courses$ = this.store.select(fromRoot.getCourses);

    }

    ngOnInit() {

        this.route.params.subscribe((data) => {
            this.id = Number.parseInt(data['id']);
        });

        this.coursesListService.getAuthorsList();

        this.subscription = this.courses$.subscribe((state) => {
            this.courses = state.coursesState.courses;
            this.authorsList = state.coursesState.authors;
        });

        this.item = this.getCurrentCourse();

        let itemDate;
        let itemAuthors;

        if (this.item) {
            itemAuthors = this.item.authors.map(author => {
                if (author.name) {
                    return author;
                } else {
                    return {
                        id: author.id,
                        name: `${author.firstName} ${author.lastName}`
                    };
                }
            });
            itemDate = new Date(this.item.date).toLocaleDateString().replace(/\./gi, '/');
        } else {
            itemDate = '';
            itemAuthors = [];
        }

        this.form = new FormGroup({
            name: new FormControl(this.item ? this.item.name : '', [
                Validators.required,
                Validators.maxLength(50),
            ]),
            date: new FormControl(itemDate, [
                Validators.required,
                DateValidator()
            ]),
            length: new FormControl(this.item ? this.item.length : 0, [
                Validators.required,
                DurationValidator()
            ]),
            description: new FormControl(this.item ? this.item.description : '', [
                Validators.required,
                Validators.maxLength(500),
            ]),
            authors: new FormControl(itemAuthors, [
                AuthorValidator()
            ]),
        });
    }

    getCurrentCourse() {
        return this.id && this.courses.find(course => course.id === this.id);
    }

    onCancelClick = () => {
        return this.router.navigate(['courses']);
    };


    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onSubmit = () => {

        const splittedDate = this.form.value.date.split('/');
        const newDate = `${splittedDate[1]}.${splittedDate[0]}.${splittedDate[2]}`;
        const newItem = Object.assign(this.form.value,
            {
                id: this.id || Math.floor(Math.random() * (999 - 300)),
                isTopRated: this.item ? this.item.isTopRated : false,
                date: new Date(newDate),
            });

        console.log(newItem);
        this.coursesListService.addCourse(newItem);
        this.onCancelClick();
    }

    get name() {
        return this.form.get('name');
    }

    get description() {
        return this.form.get('description');
    }

    get date() {
        return this.form.get('date');
    }

    get length() {
        return this.form.get('length');
    }

    get authors() {
        return this.form.get('authors');
    }
}

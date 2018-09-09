import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { forwardRef } from '@angular/core';

import {CourseItem} from '../../pages/courses/courseItem/courseItem.model';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../pages/courses/coursesList/reducers/CoursesReducer';
import {Author} from './author.model';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AuthorsComponent),
    multi: true
};

const noop = () => {
};

@Component({
    selector: 'app-authors',
    templateUrl: './authors.component.html',
    styleUrls: ['./authors.component.css'],
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class AuthorsComponent implements ControlValueAccessor {
    public selectedItems;
    public searchedItems = [];
    public isListOpened = false;
    public isEditMode = false;
    public onTouchedCallback: (_: any) => void = noop;
    private onChangeCallback: (_: any) => void = noop;



    @Input() public authors: Author[];
    @Input() public selectedAuthors: Author[];

    @Output() items: Author[] = this.selectedItems;

    constructor() {

    }


    ngOnInit() {
        this.selectedItems = this.selectedAuthors || [];
    }

    writeValue(value: any) {
            this.onChangeCallback(value);
    }

    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    toggleMode = (isEdit: boolean) => this.isEditMode = isEdit;


    onInputChange = (value: string) => {
        const regexp = new RegExp(value.toLowerCase());
        this.searchedItems = this.authors
            .filter(author => regexp.test(author.name.toLowerCase()))
            .filter(author => !this.selectedItems.includes(author));
}


    onSelectItem = (id: string) => {
        const newItem = this.authors.find(item => item.id === id);
        if (newItem) {
            this.selectedItems.push(newItem);
      }
      this.searchedItems = [];
      this.toggleMode(false);
      this.writeValue(this.selectedItems);
    }


    onRemoveItem = (e, id: string) => {
        e.stopPropagation();
        this.selectedItems = this.selectedItems.filter(selectedItem => selectedItem.id !== id);
        this.writeValue(this.selectedItems);
    }

}

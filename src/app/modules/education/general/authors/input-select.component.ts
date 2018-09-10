import {Component, Input, OnInit, Output} from '@angular/core';
import {forwardRef} from '@angular/core';

import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputSelectComponent),
    multi: true
};

const noop = () => {
};

@Component({
    selector: 'app-input-select',
    templateUrl: './input-select.component.html',
    styleUrls: ['./input-select.component.css'],
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class InputSelectComponent implements ControlValueAccessor {
    public selectedItems;
    public searchedItems = [];
    public isListOpened = false;
    public isEditMode = false;
    public onTouchedCallback: (_: any) => void = noop;
    private onChangeCallback: (_: any) => void = noop;


    @Input() public inputList;
    @Input() public inputSelectedList;

    @Output() items = this.selectedItems;

    constructor() {

    }


    ngOnInit() {
        this.selectedItems = this.inputSelectedList || [];
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
        this.searchedItems = this.inputList
            .filter(item => regexp.test(item.name.toLowerCase()))
            .filter(item => !this.selectedItems.includes(item));
    }


    onSelectItem = (id: string) => {
        const newItem = this.inputList.find(item => item.id === id);
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

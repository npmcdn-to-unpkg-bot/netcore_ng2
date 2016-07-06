import { ElementRef, AfterViewInit, AfterViewChecked, DoCheck, EventEmitter, TemplateRef, IterableDiffers, Renderer } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
import { ControlValueAccessor } from '@angular/forms';
export declare class AutoComplete implements AfterViewInit, DoCheck, AfterViewChecked, ControlValueAccessor {
    private el;
    private domHandler;
    private renderer;
    minLength: number;
    delay: number;
    style: any;
    styleClass: string;
    inputStyle: any;
    inputStyleClass: string;
    placeholder: string;
    readonly: number;
    disabled: boolean;
    maxlength: number;
    size: number;
    suggestions: any[];
    completeMethod: EventEmitter<any>;
    onSelect: EventEmitter<any>;
    onUnselect: EventEmitter<any>;
    onDropdownClick: EventEmitter<any>;
    field: string;
    scrollHeight: string;
    dropdown: boolean;
    multiple: boolean;
    itemTemplate: TemplateRef<any>;
    value: any;
    onModelChange: Function;
    onModelTouched: Function;
    timeout: any;
    differ: any;
    panel: any;
    input: any;
    multipleContainer: any;
    panelVisible: boolean;
    documentClickListener: any;
    suggestionsUpdated: boolean;
    constructor(el: ElementRef, domHandler: DomHandler, differs: IterableDiffers, renderer: Renderer);
    ngDoCheck(): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    onInput(event: any): void;
    search(event: any, query: string): void;
    onItemMouseover(event: any): void;
    onItemMouseout(event: any): void;
    onItemClick(event: any): void;
    selectItem(item: any): void;
    findListItem(element: any): any;
    show(): void;
    align(): void;
    hide(): void;
    handleDropdownClick(event: any): void;
    removeItem(item: any): void;
    resolveFieldData(data: any): any;
    onKeydown(event: any): void;
    isSelected(val: any): boolean;
    ngOnDestroy(): void;
}
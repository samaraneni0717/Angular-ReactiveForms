import {Component, forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'sa-counter',
    template: `
    <button (click)='increment()'> + </button>
    {{counterValue}}
    <button (click)='decrement()'> - </button>

    `,
    providers: [ {provide: NG_VALUE_ACCESSOR,
         useExisting: forwardRef(() => CounterComponent),
         multi: true}]
})
export class CounterComponent implements ControlValueAccessor {

    private _counterValue = 0;
    private propagateChange = (_: any) => {};

    // property mutators gets automatically called whenever the value changes
    get counterValue() {
        return this._counterValue;
    }

    set counterValue(value: any) {
        this._counterValue = value;
        this.propagateChange(this._counterValue);
    }
    increment(): void {
        this.counterValue++;
      //  this.propagateChange(this.counterValue);
    }

    decrement(): void {
        this.counterValue--;
        // this.propagateChange(this.counterValue);
    }
    // to write value to the model 'counterValue'
    writeValue(value: any): void {
        if (value) {
            this.counterValue = value;
        }
    }

    // registers a handler that should be called when something changes through the view
    // it takes a function which informs other form directives and form controls about the change
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    // registers a handler for touch event
    registerOnTouched(fn: any): void {
        // throw new Error("Method not implemented.");
    }
    setDisabledState?(isDisabled: boolean): void {
       // throw new Error("Method not implemented.");
    }
}

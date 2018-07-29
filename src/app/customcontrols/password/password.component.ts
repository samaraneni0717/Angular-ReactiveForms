import {Component, forwardRef, Input} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'sa-password',
    template: `<div class="form-group">
    <div class="input-group">
      <input [type]="!show ? 'password': 'text'"
             class="form-control"
             id="exampleInputAmount"
             placeholder="Enter Password"
             [value]="value"
             (input)="pushChanges($event.target.value)"
             [disabled] ='disabled'>
      <div class="input-group-addon">
        <i class="glyphicon"
          [class.glyphicon-eye-open]="!show"
          [class.glyphicon-eye-close]="show"
          (click)="show = !show"></i>
      </div>
    </div>
  </div>`,
  providers: [ {provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PasswordComponent),
    multi: true}]
})
export class PasswordComponent implements ControlValueAccessor {

    show = false;
    value = '';
    @Input()
    disabled = false;
    onChange = (_: any) => { };
    onTouched = () => { };

    constructor() { }
    // to update model when there is change in the view
    writeValue(value: any): void {
      this.value = value || '';
    }
    // to push new value to form control api
    pushChanges(value: any) {
      this.onChange(value);
    }

    // to update the other form directives and controls about the change
    registerOnChange(fn: (_: any) => {}): void { this.onChange = fn; }
    registerOnTouched(fn: () => {}): void { this.onTouched = fn; }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}

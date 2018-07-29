import { Component, forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'sa-rating-input',
    template: `
    <span *ngFor="let starred of stars; let i = index"  (click)="rate(i + (starred ? (value1 > i + 1 ? 1 : 0) : 1))">
      <ng-container *ngIf="starred; else noStar">⭐</ng-container>
      <ng-template #noStar>·</ng-template>
    </span>
  `,
  styles: [`
    span {
      display: inline-block;
      width: 25px;
      line-height: 25px;
      text-align: center;
      cursor: pointer;
    }
  `],
  providers: [{provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RatingInputComponent),
    multi: true
   }]
})
export class RatingInputComponent implements ControlValueAccessor {

  stars: boolean[] = Array(5).fill(false);

    // Function to call when the rating changes.
  private onChange = (value: any) => {};
 // private propagateChange = (_: any) => {};
  get value1(): number {
    return this.stars.reduce((total, starred) => {
      console.log('total is', total);
      return total + (starred ? 1 : 0);
    }, 0);
  }

  rate(rating: number) {
    this.stars = this.stars.map((_, i) => rating > i);
    console.log('in rate', this.stars);
  }


  // allows the Angular to update the model
  // update the model and changes needed for the view here
  writeValue(rating: number): void {
    this.stars = this.stars.map((_, i) => rating > i);
    this.onChange(this.value1);
  }

  // Allows Angular to register a function to call when the model changes
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: (rating: number) => void): void {
   // throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
   // throw new Error("Method not implemented.");
  }

}

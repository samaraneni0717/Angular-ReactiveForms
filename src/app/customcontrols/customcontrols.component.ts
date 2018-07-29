import {Component} from '@angular/core';

@Component({
    template: `
    <form #customForm = "ngForm">
    <sa-rating-input name="rating" [ngModel]="starValue"></sa-rating-input> <br><br><br>
    <sa-counter name="counter" [ngModel]='outerCounterValue'></sa-counter>
    <p>Form Status: {{customForm.status | json}}</p>
    <p>Form Pristine: {{customForm.pristine | json}}</p>
    <p>Form Dirty: {{customForm.dirty | json}}</p>
    <pre>{{ customForm.value | json }}</pre>
    </form>`
})
export class CustomcontrolsComponent {
    outerCounterValue = 5;
    starValue: any;
}

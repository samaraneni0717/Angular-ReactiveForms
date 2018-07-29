import {NgModule} from '@angular/core';
import { CustomcontrolsComponent } from './customcontrols.component';
import { RatingInputComponent } from './rating/rating-input.component';
import { SharedModule } from '../shared/shared-module';
import { CounterComponent } from './counter/counter.component';
import { PasswordComponent } from './password/password.component';

@NgModule({
    imports: [SharedModule],
    declarations: [CustomcontrolsComponent, RatingInputComponent,
        CounterComponent, PasswordComponent]
})
export class CustomcontrolsModule {

}

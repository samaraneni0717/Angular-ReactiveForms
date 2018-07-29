import { NgModule, ModuleWithProviders } from '@angular/core';
import { SignupComponent } from './signup.component';
import { SharedModule } from '../shared/shared-module';

@NgModule({
    imports: [SharedModule],
    declarations: [SignupComponent]
})
export class SignupModule {
   static forRoot(): ModuleWithProviders {
       return {ngModule: SignupModule};
   }

}

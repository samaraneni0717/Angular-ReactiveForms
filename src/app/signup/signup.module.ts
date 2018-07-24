import { NgModule, ModuleWithProviders } from "@angular/core";
import { SignupComponent } from "./signup.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


@NgModule({
    imports:[ReactiveFormsModule, CommonModule],
    declarations:[SignupComponent]
})
export class SignupModule{
   static forRoot():ModuleWithProviders{
       return {ngModule:SignupModule}
   }
    
}
import { Component, OnInit, ElementRef, ViewChildren, AfterViewInit } from '@angular/core'
import { FormBuilder, Validators, FormControl, FormGroup, FormControlName, AbstractControl } from '@angular/forms';
import { GenericValidator } from '../shared/generic-validator';
import { Observable, fromEvent, pipe } from 'rxjs';

import { merge, debounceTime } from 'rxjs/operators';

//custom validator for cross field validation
function emailSimilarity(c:AbstractControl):{[key:string]:boolean}{
    const firstCtrl= c.get('email');
    const secondCtrl = c.get('confirmEmail');
    // initially when the controls are not touched we don't want validation
    if(firstCtrl.pristine || secondCtrl.pristine){
        return null;
    }
    if(firstCtrl.value != secondCtrl.value){
        return {'notSame':true};
    }
    return null;
}

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit, AfterViewInit {

    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
    private validationMessages: { [key: string]: { [key: string]: string } };
    private genericValidator: GenericValidator;
    public displayMessage: { [key: string]: string };

    noSpecialCharsPatter = new RegExp("^[a-zA-Z0-9_]*$");
    signupForm: FormGroup;
    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.signupForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.pattern(this.noSpecialCharsPatter)]],
            lastName: ['', Validators.pattern(this.noSpecialCharsPatter)],
            //nested formGroup for cross-field validation
            emailGroup: this.fb.group({
                email: ['', Validators.email],
                confirmEmail: ['', Validators.email],
            },{validator:emailSimilarity}),            
            phone:[''],
            notification:['email']
        })

        this.validationMessages = {
            firstName: {
                required: 'FirstName is required.',
                pattern: 'Enter a valid first name'
            },
            lastName: {
                pattern: 'Enter a valid last name'
            },
            email: {
                email: "Enter email in proper format like example@gmail.com"
            },
            confirmEmail: {
                confirmEmail: "Email doesn't match with above email."
            }
        }
        // Define an instance of the validator for use with this form, 
        // passing in this form's set of validation messages.
        this.genericValidator = new GenericValidator(this.validationMessages);
    }

    ngAfterViewInit(): void {
        // Watch for the blur event from any input element on the form.
        let controlBlurs: Observable<any>[] = this.formInputElements
            .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
        console.log('controls', controlBlurs)
        // Merge the blur event observable with the valueChanges observable
        this.signupForm.valueChanges.pipe(merge(...controlBlurs)).pipe(debounceTime(800)).subscribe(value => {
            this.displayMessage = this.genericValidator.processMessages(this.signupForm);
            console.log('the display message is', this.displayMessage.firstName)
        });
    }

    populateData(): void {
        //assign values to the subset of the formControls
        this.signupForm.patchValue({
            firstName: "sai",
            lastName: "amar",
            email: "sai.amar@email.com",
            confirmEmail: "sai.amar@email.com"
        })
    }

    resetForm(): void {
        // reset  resets the state of the form and also values
        this.signupForm.reset();
    }

    setRadioOption(option:string):void{
        const emailCtrl=this.signupForm.get('email');
        option.toLowerCase() === "text"? emailCtrl.clearValidators():null;
        // to again run the validation to make changes
        emailCtrl.updateValueAndValidity();

    }
}
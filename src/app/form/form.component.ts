import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  termsAndConditions = true;

  registrationForm = new FormGroup({
    'username': new FormControl('', [Validators.required]),
    'email': new FormControl('',[Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    'password': new FormControl('', Validators.required),
    'dob': new FormControl('', Validators.required),
    'gender': new FormGroup({
      value: new FormControl('', Validators.required)
    }),
    'hobbies': new FormControl(''),
    'terms': new FormControl('', Validators.required),
  });


  onSubmitForm() {
    if (this.registrationForm.value) {
      console.log(this.registrationForm.value);
      console.log(this.registrationForm.get('gender.value'));
    } else {
      console.error('Form is invalid');
    }
  }


}


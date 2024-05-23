import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {


  registrationForm = new FormGroup({
    'username': new FormControl('', [Validators.required]),
    'email': new FormControl('',[Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    'password': new FormControl('', Validators.required),
    'dob': new FormControl('', Validators.required),
    'gender': new FormGroup({
      value: new FormControl('', Validators.required)
    }),
    'hobbies': new FormControl(''),
    'upload': new FormControl('', Validators.required),
    'terms': new FormControl(false, Validators.requiredTrue),
  });


  /**
   * Determines whether submit form on
   */
  onSubmitForm() {
    if (this.registrationForm.value) {
      console.log(this.registrationForm.value);
      console.log(this.registrationForm.get('gender.value'));
    } else {
      console.error('Form is invalid');
    }
  }

  profileUrl = ''

  onChangeFile(e: any){
    if(e.target.files){
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.profileUrl=event.target.result;
      }
    }
  }

}


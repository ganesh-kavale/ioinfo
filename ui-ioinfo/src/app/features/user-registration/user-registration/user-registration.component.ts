import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.scss'
})
export class UserRegistrationComponent  implements OnInit {

  registrationForm: any;

  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
   this.registrationForm = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
  emailId: new FormControl('', [Validators.required, Validators.email]),
  mobileNo: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
  password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  confirmPassword: new FormControl('', [Validators.required])
}, { validators: this.passwordMatchValidator }); // ✅ Wrap inside object

  }
  

  passwordMatchValidator(form: any) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit(registration:any) {
 
      console.log('Form Submitted', registration.value);
   
  }
}

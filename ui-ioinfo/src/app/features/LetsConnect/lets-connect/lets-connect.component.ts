import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-lets-connect',
  templateUrl: './lets-connect.component.html',
  styleUrl: './lets-connect.component.scss'
})
export class LetsConnectComponent implements OnInit {

  contactForm: any;

  constructor(private userService:UserService) {

  }


  ngOnInit(): void {

    this.contactForm = new FormGroup({
      emailId: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$') // Standard email pattern
      ]),
      mobileNo: new FormControl('', [
        Validators.pattern('^[6-9][0-9]{9}$') // Indian 10-digit mobile numbers starting with 6-9
      ]),
      subject: new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ]),
      body: new FormControl('', [
        Validators.required
      ]),
      file: new FormControl('', [
        Validators.required
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ]),
    });

  }
  selectedFile: any;
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
  onSubmit(contactForm: any) {
    console.log(contactForm.value, this.selectedFile);

    this.userService.letsConnect(contactForm, this.selectedFile).subscribe((res: any) => {

      console.log("rrrrrrrrrrrrr", res);

    })

  }


  
}

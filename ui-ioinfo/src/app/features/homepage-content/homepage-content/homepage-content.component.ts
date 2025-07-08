import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomepageCorousalService } from '../../../../services/homepage-corousal.service';
import { log } from 'console';
import { EmailService } from '../../../../services/email.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IoinfoImagesRetriveService } from '../../../../services/ioinfo-images-retrive.service';

@Component({
  selector: 'app-homepage-content',
  templateUrl: './homepage-content.component.html',
  styleUrl: './homepage-content.component.scss'
})
export class HomepageContentComponent implements OnInit {

  basePath: any = "../../../assets/images/";
  images: any[] = [];
  imageUrls: any;
  contactForm: any;
  contactForm1: any;
  imageRows:any[]=[];
  letter:any;
  constructor(private homepageCorousal: HomepageCorousalService, private emailService: EmailService, private ioinfoImagesRetriveService: IoinfoImagesRetriveService) {

  }


  ngOnInit(): void {
this.letter='WORK';
    console.log(this.imageUrls);

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
      ])
    });


    console.log(this.imageUrls);



    this.homepageCorousal.getHomepageCorousal().subscribe(res => {
      console.log(res);
      this.imageUrls = res.map((data: any) => this.basePath + data.name);

      console.log(this.imageUrls);

    })
    this.emailService.sendSubscriptionEmail().subscribe((res: any) => {
      console.log("ttttttttttttttttttttttttt" + res);
    })

    this.ioinfoImagesRetriveService.getHomepageImageRow().subscribe((res: any) => {
      this.imageRows=res;
      console.log(this.imageRows);      
    })

    
  }
  onSubmit(contactForm: any) {
    console.log(contactForm);

  }

 @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  currentIndex = 0;

  scrollLeft() {
    const totalCards =  this.scrollContainer.nativeElement.children[0].children.length;
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateTransform();
    }
  }

  scrollRight() {
    const visibleCards = 3;
    const totalCards =  this.scrollContainer.nativeElement.children[0].children.length;
    if (this.currentIndex < totalCards - visibleCards) {
      this.currentIndex++;
      this.updateTransform();
    }
  }

  updateTransform() {
    const container = this.scrollContainer.nativeElement.querySelector('.image-cards-container');
    const cardWidth = 280 + 32; // card width + gap
    const offset = this.currentIndex * cardWidth;
    container.style.transform = `translateX(-${offset}px)`;
  }

}

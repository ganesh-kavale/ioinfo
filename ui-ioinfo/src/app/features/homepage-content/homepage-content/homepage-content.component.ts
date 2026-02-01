import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomepageCorousalService } from '../../../../services/homepage-corousal.service';
import { log } from 'console';
import { EmailService } from '../../../../services/email.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IoinfoImagesRetriveService } from '../../../../services/ioinfo-images-retrive.service';
import { UserService } from '../../../../services/user.service';
import { ProjectsService } from '../../../../services/projects.service';
import { MatDialog } from '@angular/material/dialog';
import { LetsConnectComponent } from '../../LetsConnect/lets-connect/lets-connect.component';

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
  imageRows: any[] = [];
  letter: any;
  enterpriseProjects: any;
  personalProjects: any;
  constructor(private homepageCorousal: HomepageCorousalService, private emailService: EmailService, private ioinfoImagesRetriveService: IoinfoImagesRetriveService, private userService: UserService, private projectsService: ProjectsService) {

  }


  ngOnInit(): void {
    this.letter = 'WORK';
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
      ]),
      file: new FormControl('', [
        Validators.required
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(255)
      ]),
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
      this.imageRows = res;
      console.log(this.imageRows);
    })



    this.projectsService.getProjects().subscribe(res => {
      console.log('res projects:', res);

      this.enterpriseProjects = res
        .filter((item: any) => item.projectType === true)
        .map((item: any) => item.projectName);

      this.personalProjects = res
        .filter((item: any) => item.projectType === false)
        .map((item: any) => item.projectName);

      console.log('True projects:', this.enterpriseProjects);
      console.log('False projects:', this.personalProjects);


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

  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  currentIndex = 0;

  scrollLeft() {
    const totalCards = this.scrollContainer.nativeElement.children[0].children.length;
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateTransform();
    }
  }

  scrollRight() {
    const visibleCards = 3;
    const totalCards = this.scrollContainer.nativeElement.children[0].children.length;
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

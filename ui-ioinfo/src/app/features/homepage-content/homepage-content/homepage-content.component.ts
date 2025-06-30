import { Component, OnInit } from '@angular/core';
import { HomepageCorousalService } from '../../../../services/homepage-corousal.service';
import { log } from 'console';
import { EmailService } from '../../../../services/email.service';

@Component({
  selector: 'app-homepage-content',
  templateUrl: './homepage-content.component.html',
  styleUrl: './homepage-content.component.scss'
})
export class HomepageContentComponent implements OnInit {

  basePath:any="../../../assets/images/";
  images:any[]=[];
  constructor(private homepageCorousal:HomepageCorousalService,private emailService:EmailService){

  }
  // imageUrls:any;
  ngOnInit(): void {

    console.log(this.imageUrls);
    
    // throw new Error('Method not implemented.');

    // this.homepageCorousal.getHomepageCorousal().subscribe(res=>{

    //   console.log(res);
      
    //   this.imageUrls=res.map((data: any) => this.basePath + data.name );

    //   console.log(  this.imageUrls);
      
    // })

    this.emailService.sendSubscriptionEmail().subscribe((res:any)=>{

      console.log("ttttttttttttttttttttttttt" + res);
      

      
    })

  }

  imageUrls = [
    '../../../assets/images/image1.jpg',
    '../../../assets/images/image2.jpg',

    '../../../assets/images/image3.jpg',

    '../../../assets/images/image4.jpg',

    '../../../assets/images/image5.jpg',

  ];

  // images = [
  //   { src: "https://tms-outsource.com/blog/wp-content/uploads/2023/05/bootstrap-alternatives.jpg", alt: "Bootstrap Alternative" },
  //   { src: "https://www.tutorialrepublic.com/lib/images/bootstrap-5.0-illustration.png", alt: "Bootstrap 5 Illustration" },
  //   { src: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230310132605/Bootstrap-Tutorial.jpg", alt: "Bootstrap Tutorial" }
  // ];

  // slideConfig = {
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   dots: true,
  //   arrows: true,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   infinite: true
  // };

}

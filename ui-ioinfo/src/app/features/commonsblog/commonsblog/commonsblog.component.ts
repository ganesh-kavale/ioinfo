import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commonsblog',
  templateUrl: './commonsblog.component.html',
  styleUrl: './commonsblog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonsblogComponent implements OnInit{
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  longText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut illo quibusdam voluptas iste repellendus, possimus facere eaque, at dolorem eum dicta ullam aspernatur, ipsam exercitationem sequi vel fuga minima deserunt quasi! Beatae asperiores iure illum voluptatibus praesentium.' ;

  
  imageUrls = [
    '../../../assets/images/image1.jpg',
    '../../../assets/images/image2.jpg',

    '../../../assets/images/image3.jpg',

    '../../../assets/images/image4.jpg',

    '../../../assets/images/image5.jpg',

    '../../../assets/images/image1.jpg',
    '../../../assets/images/image2.jpg',

    '../../../assets/images/image3.jpg',

    '../../../assets/images/image4.jpg',

    '../../../assets/images/image5.jpg',


    '../../../assets/images/image1.jpg',
    '../../../assets/images/image2.jpg',

    '../../../assets/images/image3.jpg',

    '../../../assets/images/image4.jpg',

    '../../../assets/images/image5.jpg',


    '../../../assets/images/image1.jpg',
    '../../../assets/images/image2.jpg',

    '../../../assets/images/image3.jpg',

    '../../../assets/images/image4.jpg',

    '../../../assets/images/image5.jpg',


  ];

  onLike(index:any) {
    console.log('Liked card:', index);
}

 onShare(index:any) {
    console.log('Shared card:', index);
}

}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memoir-note',
  templateUrl: './memoir-note.component.html',
  styleUrl: './memoir-note.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class MemoirNoteComponent {

  constructor(private router:Router){

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
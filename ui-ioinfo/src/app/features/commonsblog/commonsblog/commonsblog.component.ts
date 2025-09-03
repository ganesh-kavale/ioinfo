import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PersonalDetailsService } from '../../../../services/personal-details.service';
import { Observable } from 'rxjs';

interface Blog {
  id: number;
  title: string;
  imagePath: string;
  details: string;
  storyTimeline: string;
  likes: number;
  loves: number;
  shares: number;
  supports: number;
  createdAt: string;
}

@Component({
  selector: 'app-commonsblog',
  templateUrl: './commonsblog.component.html',
  styleUrls: ['./commonsblog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonsblogComponent implements OnInit {
title: string = "";
readFullStory:boolean=false;

constructor(private personalDetailsService: PersonalDetailsService) {}

blogs$!: Observable<Blog[]>;

ngOnInit(): void {
  this.title = "hhhhhhhhhhhhhh";
  this.blogs$ = this.personalDetailsService.getPersonalBlogs();
}


  onLike(blog: any) {
    console.log('Liked blog:', blog.id);
  }

  onShare(blog: any) {
    console.log('Shared blog:', blog.id);
  }

  onLove(blog: any) {
    console.log('Loved blog:', blog.id);
  }

  onSupport(blog: any) {
    console.log('Supported blog:', blog.id);
  }


// readFullStory: boolean = false;
expandedBlog: any | null = null;

toggleExpand(blog: any, index: number) {
  if (this.readFullStory && this.expandedBlog === blog) {
    // Collapse
    this.readFullStory = false;
    this.expandedBlog = null;
  } else {
    // Expand
    this.readFullStory = true;
    this.expandedBlog = blog;
  }
}

}

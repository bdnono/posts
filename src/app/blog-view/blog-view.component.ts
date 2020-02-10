import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import { BlogService} from '../services/blog.service';
import { Router } from '@angular/router';
import { Blog } from '../models/Blog.model';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {

  blogs: Blog[];
  blogSubscription:Subscription;

  constructor(private blogService: BlogService, private router:Router) { }

  ngOnInit() {
    this.blogSubscription = this.blogService.blogsSubject.subscribe(
      (blogs: Blog[]) => {
        this.blogs = blogs;
      }
    );
    this.blogService.emitBlogSubject();
  }

  onNewBlog() {
    this.router.navigate(['/blogs','new']);
  }

  onSave() {
    this.blogService.saveBlogsToServer();
  }

  onFetch() {
    this.blogService.getBlogsFromServer();
  }

  ngOndestroy(){
    this.blogSubscription.unsubscribe();
  }

}

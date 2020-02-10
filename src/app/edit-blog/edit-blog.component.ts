import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogService } from '../services/blog.service';
import { Router} from '@angular/router';
import { Blog } from '../models/Blog.model';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {

  constructor(private blogService:BlogService,private router:Router) { }

  ngOnInit() {
  }
  
  onSubmit(form: NgForm) {
    const blog=new Blog(0,form.value['titre'],form.value['article'],0,0,new Date);
    
    this.blogService.addBlog(blog);
    this.router.navigate(['/blogs']);
  }

}

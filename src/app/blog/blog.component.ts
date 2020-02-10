import { Component, OnInit,Input} from '@angular/core';
import {BlogService} from '../services/blog.service';
import { Blog } from '../models/Blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {

  @Input() blogTitre:string;
  @Input() blogArticle:string;
  @Input() blogAime:number;
  @Input() blogAimepas:number;
  @Input() id:number;
  @Input() created_at:Date;


  constructor(private blogService:BlogService) { }

  ngOnInit() {
  }

  onDeleteblog() {
      this.blogService.deleteBlog(this.id);
  } 
  
  onupAime(){
    this.blogService.upAime(this.id);
    
  }

  onupAimePas(){
    this.blogService.upAimepas(this.id);
  }

}

import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  blogsSubject = new Subject<any[]>();

  private blogs:Blog[]=[];
  
  constructor(private httpClient:HttpClient) {
  }

  saveBlogsToServer() {
    this.httpClient
      .put('https://postproject-ab222.firebaseio.com/posts.json', this.blogs)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getBlogsFromServer() {
    this.httpClient
      .get<any[]>('https://postproject-ab222.firebaseio.com/posts.json')
      .subscribe(
        (response) => {
          if(response!=null) {
            this.blogs = response;
            this.emitBlogSubject();
          }
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  emitBlogSubject() {
    this.blogsSubject.next(this.blogs.slice());
  }

  upAime(i:number){
    this.blogs[i].aime+=1;
    this.emitBlogSubject();
  }

  upAimepas(i:number){
    this.blogs[i].aimepas+=1;
    this.emitBlogSubject();
  }

  deleteBlog(id:number) {
    
    this.blogs.splice(id, 1);
    var i=id;
    while(i<this.blogs.length) {
      this.blogs[i].id=this.blogs[i].id-1;
      i++;
    }
    this.emitBlogSubject();
  }
  
  addBlog(blog:Blog) {
    blog.id=this.blogs.length;
    //console.log('id'+blog.id);
    blog.aime=0;
    blog.aimepas=0;
    this.blogs.push(blog);
    this.emitBlogSubject();
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';

import { BlogService} from './services/blog.service';

const appRoutes: Routes = [
  { path: 'blogs', component: BlogViewComponent },
  { path: 'blogs/new', component: EditBlogComponent },
  { path: '', redirectTo: 'blogs', pathMatch: 'full' },
  { path: '**', redirectTo: 'blogs' }
];

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogViewComponent,
    EditBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

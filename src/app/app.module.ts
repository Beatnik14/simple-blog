import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SinglePostComponent } from './post-managment/single-post/single-post.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './post-managment/posts/posts.component';
import { ShortenPipe } from './shared/shorten.pipe';
import { FullPostComponent } from './post-managment/full-post/full-post.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { AuthorComponent } from './author/author.component';
@NgModule({
  declarations: [
    AppComponent, 
    DialogComponent,
    AuthorComponent,
    SinglePostComponent,
    PostsComponent,
    FullPostComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents:[
    DialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

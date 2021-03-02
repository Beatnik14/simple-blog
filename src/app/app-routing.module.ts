import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { FullPostComponent } from './post-managment/full-post/full-post.component';
import { PostsComponent } from './post-managment/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    pathMatch: 'full',
  },
  {
    path: 'post/:postId/:authorId',
    component: FullPostComponent
  },
  {
    path: 'author/:id',
    component: AuthorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

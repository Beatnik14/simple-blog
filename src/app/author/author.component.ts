import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Iauthor } from '../post-managment/models/author.model';
import { Ipost } from '../post-managment/models/post-model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent {
  authorId: number = this.route.snapshot.params['id'];
  author$: Observable<Iauthor> = this.apiService.getAuthor(this.authorId);
  loadedPosts: number = 6;
  length: number;
  loadAble: boolean = true;
  addPosts: number = 6;

  posts$: Observable<Ipost[]> = this.apiService.posts$
    .pipe(
      tap(data => this.length = data.filter(post => post.userId == this.authorId).length),
      map((posts) => posts.filter(post => post.userId == this.authorId)),
      map((data) => data.slice(0, this.loadedPosts))
    )

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }
  onLoadMore() {
    if (this.loadedPosts < this.length) {
      this.loadedPosts += this.addPosts;
      this.posts$ = this.apiService.posts$
        .pipe(
          map((posts) => posts.filter(post => post.userId == this.authorId)),
          map((data) => data.slice(0, this.loadedPosts))
        )
      if (this.loadedPosts >= this.length) {
        this.loadAble = false;
      }
    }
  }
}

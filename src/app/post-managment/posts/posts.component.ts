import { Component } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Ipost } from '../models/post-model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  loadedPosts: number = 12;
  length: number;
  loadAble: boolean = true;
  addPosts: number = 12;

  posts$: Observable<Ipost[]> = this.apiService.posts$
    .pipe(
      tap(data => this.length = data.length),
      map((data) => data.slice(0, this.loadedPosts))
    )

  constructor(private apiService: ApiService) { }

  onLoadMore() {
    if (this.loadedPosts < this.length) {
      this.loadedPosts += this.addPosts;
      this.posts$ = this.apiService.posts$
        .pipe(
          map((data) => data.slice(0, this.loadedPosts))
        )
      if (this.loadedPosts >= this.length) {
        this.loadAble = false;
      }
    }
  }
}

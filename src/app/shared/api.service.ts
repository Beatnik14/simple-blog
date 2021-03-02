import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iauthor } from '../post-managment/models/author.model';
import { Icomment } from '../post-managment/models/comment.model';
import { Ipost } from '../post-managment/models/post-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private postApiUrl = environment.postApiUrl;

  posts$ = this.http.get<Ipost[]>(this.postApiUrl + "/posts");

  getSinglePost(id: number): Observable<Ipost> {
    return this.http.get<Ipost>(this.postApiUrl + "/posts/" + id);
  }

  getAuthor(id: number): Observable<Iauthor> {
    return this.http.get<Iauthor>(this.postApiUrl + "/users/" + id);
  }

  getComments(id: number): Observable<Icomment[]> {
    return this.http.get<Icomment[]>(this.postApiUrl + `/comments?postId=${id}`);
  }

  postComment(comment: Icomment): Observable<any> {
    return this.http.post<Icomment>(this.postApiUrl + '/comments', comment,{
      observe: 'response'
    });
  }
}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { ApiService } from 'src/app/shared/api.service';
import { Iauthor } from '../models/author.model';
import { Icomment } from '../models/comment.model';
import { Ipost } from '../models/post-model';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.scss']
})
export class FullPostComponent {
  postId: number = this.route.snapshot.params['postId'];
  authorId: number = this.route.snapshot.params['authorId'];
  post$: Observable<Ipost> = this.apiService.getSinglePost(this.postId);
  author$: Observable<Iauthor> = this.apiService.getAuthor(this.authorId);
  comments$: Observable<Icomment[]> = this.apiService.getComments(this.postId);

  name: string;
  email: string;
  body: string;

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private apiService: ApiService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        postId: this.postId,
        name: this.name,
        email: this.email,
        body: this.body
      }
    });
    dialogRef.afterClosed()
      .subscribe(result => {
        if (result.name && result.email && result.body) {
          this.apiService.postComment(result)
            .subscribe(resp => {
              if (resp.status == 201) {
                alert ("Comment was successfully added")
              }
              else{
                alert ("Something went wrong")
              }
            });          
        }
      });
  }

}

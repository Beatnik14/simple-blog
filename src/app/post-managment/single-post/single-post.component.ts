import { Component, Input } from '@angular/core';
import { Ipost } from '../models/post-model';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent{

  @Input() singlePost: Ipost;

  imageApiUrl:string = `https://picsum.photos/id/`;

  constructor() { }

}

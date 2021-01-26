import { Component, Input } from "@angular/core";
import { Post } from "../../models/post.model";

@Component({
  selector: 'post-list',
  templateUrl:"./post-list.component.html",
  styleUrls:['./post-list.component.css']
})

export class PostListComponent{
  @Input() posts:Post[] = []

}

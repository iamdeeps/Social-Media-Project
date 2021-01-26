import { Component } from "@angular/core";

@Component({
  selector: 'post-list',
  templateUrl:"./post-list.component.html",
  styleUrls:['./post-list.component.css']
})

export class PostListComponent{
  posts = [
    {title:'First Post',content:'This is first Posts'},
    {title:'Second Post',content:'This is Second Posts'},
    {title:'Third Post',content:'This is Third Posts'},
  ]

}

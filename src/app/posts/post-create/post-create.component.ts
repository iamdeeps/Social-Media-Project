import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  ngModelTitle = ''
  ngModelContent = ''
  @Output() postCreated = new EventEmitter<Post>()

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(){
    const post:Post = {
      title:this.ngModelTitle,
      content: this.ngModelContent,
    }
    this.postCreated.emit(post)
  }

}

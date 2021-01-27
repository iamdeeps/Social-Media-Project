import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../../models/post.model';
import { PostsService } from '../../services/posts.service'

@Component({
  selector: 'post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  @Output() postCreated = new EventEmitter<Post>()

  constructor(public postsService:PostsService) { }

  ngOnInit(): void {
  }

  onSubmitForm(form: NgForm){
    if(form.invalid){
      console.log('FORM IS INVALID BRO, PHEWWW THANKS TO MY VALIDATIONS')
      return ;
    }
    const post:Post = {
      title: form.value.title,
      content: form.value.content,
    }
    this.postCreated.emit(post)
  }

}

import { Component, OnInit , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  ngModelTitle = ''
  ngModelContent = ''
  @Output() postCreated = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(){
    const post = {
      title:this.ngModelTitle,
      content: this.ngModelContent,
    }
    this.postCreated.emit(post)
  }

}

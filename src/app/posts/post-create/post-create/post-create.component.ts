import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  newPost = ''
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(event){
    this.newPost = event
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { PostService } from './../services/post.service';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css']
})
export class PostNewComponent implements OnInit {
  posts;
  constructor(private serv: PostService) {
  }

  ngOnInit() {
    this.serv.get().subscribe(response => this.posts = response)
  }
  createPost(Inputtitle: HTMLInputElement) {
    let post = { title: Inputtitle.value };
    this.serv.create(post).subscribe(response => this.posts.splice(0, 0, post));
  }
  updatePost(post) {
    this.serv.update(post, { title: 'New Tile' }).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts[index] = response;
    }
    )
  }
  deletePost(post) {
    this.serv.delete(post).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1)
    })
  }
}

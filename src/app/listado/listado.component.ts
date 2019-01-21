import { Component, OnInit } from '@angular/core';
import { Comment } from '../comment';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  comments: Comment[];
  
  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
    this.getComments()
  }

  getComments(): void {
    this.commentsService.getComments()
      .subscribe(comments => {
        this.comments = comments})
  }
}

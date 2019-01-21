import { Injectable } from '@angular/core';
import { Comment } from './comment';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }
  
  private getCommentsUrl = 'http://simple-api.herokuapp.com/api/v1/comments';


  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.getCommentsUrl);
  }
}

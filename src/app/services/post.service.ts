import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

interface Post {
  driver_id: number;
  total: string;
  
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  apiUrl = 'http://localhost:83';
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl + "/angular");
  }
  getSortPosts(order: any) {
    console.log("order---: " + order);
    return this.http.get<Post[]>(this.apiUrl + "/angular_order/" + order);
  }
}

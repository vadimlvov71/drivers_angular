import { Component , Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './services/post.service';
import { HttpClient, HttpClientModule, HttpHandler  } from '@angular/common/http';

interface Post {
  driver_id: number;
  total: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-client';
  posts: Post[] = [];
  order = "";
  errorMessage!: string;
  searchText = '';
  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman'
  ];
  //@Input() search-text: string;
  constructor(private data_service: DataService) {}

  ngOnInit() {
    this.data_service.getAllPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
        console.log('posts');
        console.log(this.posts);
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
  }
  getSort() {
    
   if (this.order == "") {
      this.order = "asc";
      console.log('empty');
    } else {
      if (this.order == "desc") {
        this.order = "asc";
      }else{
        this.order = "desc";
      }
    }
    console.log('this.order' + this.order);
    this.data_service.getSortPosts(this.order).subscribe({
      next: (posts) => {
        this.posts = posts;
        
        console.log(this.posts);
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
  }
}
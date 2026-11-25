import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

export interface Review {
  id: number;
  name: string;
  job: string;
  image: string;
  text: string;
}

@Service()
export class Reviewservice {
  private apiURL = 'http://localhost:3000/reviews';

  private http = inject(HttpClient);

  //GET DATA
  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiURL);
    
  }
}

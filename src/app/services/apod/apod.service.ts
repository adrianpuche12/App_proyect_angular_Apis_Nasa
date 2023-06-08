import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  constructor(private http: HttpClient) {
    console.log("Sercicio HTTP");
  }

  getApod(): any {
    return this.http.get('https://api.nasa.gov/planetary/apod?api_key=DCn9Ur0hSKRPN1YS3U7fcmq7XAEu6nrSVQj48itJ');
  }
}

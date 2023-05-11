import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NeowsService {

  constructor(private http: HttpClient) {
    console.log("Sercicio HTTP");
  }

  getNeows(): any {
    return this.http.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY');
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  

getConfig() {
  return this.http.get<any>('http://localhost:3000/posts/');
}
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  

getConfig(id: string) {
  return this.http.get<any>('http://localhost:3000/posts/'+id);
}
}

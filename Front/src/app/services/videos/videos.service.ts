import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  URL = 'http://localhost:8080/videos';

  constructor(private http: HttpClient) {}

}

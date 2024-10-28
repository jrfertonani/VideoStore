import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Videos } from '../../models/Videos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  URL = 'http://localhost:8080/videos';

  constructor(private http: HttpClient) {}


  create(video: Videos):Observable<Videos>{
    return this.http.post<Videos>(this.URL,video)
  }

  list():Observable<Videos[]>{
    return this.http.get<Videos[]>(this.URL)
  }

  findById(id: number):Observable<Videos>{
    return this.http.get<Videos>(`${this.URL}/${id}`)
  }


  delete(id: number):Observable<Videos>{
    return this.http.delete<Videos>(`${this.URL}/${id}`)
  }

}

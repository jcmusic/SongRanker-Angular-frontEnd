import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISong } from './song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) { }

  getSongss(){
    return this.http.get<ISong[]>('api/bands');
  }
  
}

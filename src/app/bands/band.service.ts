import { Injectable } from '@angular/core';
import { IBand } from './band';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BandService {

  bandlist!: [IBand];

  constructor(private http: HttpClient) { }

  getBands(): Observable<IBand[]>{
    return this.http.get<IBand[]>('/api/bands');
  }

  add(band: IBand){
    //this.bandlist.push(band);
    this.http.post('/api/bands', band).subscribe(() => {
      console.log(`Band: ${band} added.`)
    });
  }
}


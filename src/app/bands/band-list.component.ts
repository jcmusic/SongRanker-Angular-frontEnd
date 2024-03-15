import { Component, inject } from '@angular/core';
import { IBand } from './band';
import { CommonModule, NgFor } from '@angular/common';
import { BandDetailComponent } from "./band-detail.component";
import { BandService } from './band.service';

@Component({
    selector: 'app-bands',
    standalone: true,
    templateUrl: './band-list.component.html',
    styleUrl: './band-list.component.css',
    imports: [NgFor, CommonModule, BandDetailComponent]
})

export class BandsComponent {
  filter: string = '';
  selectedBand!: IBand;
  bands!: IBand[];
  private bandSvc: BandService = inject(BandService);
  //private userSvc: UserService = inject(UserService);

constructor(){
/*  this.bands = 
   [
    { 'Id': 1, 'Name': 'The Beatles', 'Created': new Date(1/1/2024), 'CreatedBy': 1},
    { 'Id': 2, 'Name': 'The Rolling stones', 'Created': new Date(1/1/2024), 'CreatedBy': 1},
  ]; */
}

ngOnInit(){
  this.bandSvc.getBands().subscribe(bandlist => {
    this.bands = bandlist;
  });
}


addBand(band: IBand): void {
  this.bandSvc.add(band);
}

filterChange(event : any) {
this.filter = event.target.value;
}

getFilteredBands() { 
  return this.filter === ''
  ? this.bands
  : this.bands.filter((band) => band.Name.toLowerCase().includes(this.filter.toLowerCase()));
};

}


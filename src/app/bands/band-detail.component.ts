import { Component, Input } from '@angular/core';
import { IBand } from './band';

@Component({
  selector: 'app-band-detail',
  standalone: true,
  imports: [],
  templateUrl: './band-detail.component.html',
  styleUrl: './band-detail.component.css'
})
export class BandDetailComponent {
@Input() band!: IBand;
}

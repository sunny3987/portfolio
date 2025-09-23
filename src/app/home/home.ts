import { Component } from '@angular/core';
import { Resume } from '../resume';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
  providers:[Resume]
})
export class Home {
  constructor(private r:Resume){}
  showResume(){
    this.r.openResume();
  }
}

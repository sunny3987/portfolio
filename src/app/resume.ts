import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Resume {
  private resumeUrl = '/Resume.pdf';
  constructor(){}
  openResume(){
    window.open(this.resumeUrl,"_blank");
  }
}

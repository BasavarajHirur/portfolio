import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.loadText();
  }

  textSkills() {
    const text = this.elementRef.nativeElement.querySelector(".sec-skill");
    setTimeout(() => {
      text.textContent = "Freelancer";
    }, 0);
    setTimeout(() => {
      text.textContent = "Blogger";
    }, 4000);
    setTimeout(() => {
      text.textContent = "YouTuber";
    }, 8000); //1s = 1000 milliseconds
  }

  loadText() {
    const text = this.elementRef.nativeElement.querySelector(".sec-text");
    setTimeout(() => {
      text.style.width = '250px'
    }, 500);
  }
}

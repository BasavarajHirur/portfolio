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
    const skills = this.elementRef.nativeElement.querySelectorAll(".skill");
    skills.forEach((skill:any, ind:number) => {
      skill.style.transform = 'translateY()'
    });
  }

  loadText() {
    const text = this.elementRef.nativeElement.querySelector(".sec-text");
    setTimeout(() => {
      text.style.width = '250px'
    }, 500);
  }
}

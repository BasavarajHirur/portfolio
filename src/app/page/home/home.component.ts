import { Component, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUserData } from 'src/app/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public data: any;
  public activeSection = 'profile';
  public sectionIds = ['profile', 'experience', 'skills', 'education', 'contact'];
  private isScrolling = false;
  private scrollTimeout: any;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectUserData).subscribe(
      res => {
        if (res) {
          this.data = res;
        }
      }
    )
  }

  animateScrollTo(targetY: number, duration: number = 600) {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      window.scrollTo(0, startY + distance * progress);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  handleScroll(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      this.animateScrollTo(offsetPosition);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let current = this.sectionIds[0];
    const offset = window.innerHeight / 2;
    for (const id of this.sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom >= offset) {
          current = id;
        }
      }
    }
    this.activeSection = current;
  }
}

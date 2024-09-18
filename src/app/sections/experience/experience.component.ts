import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectExperienceDetails } from 'src/app/store';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public experienceData$: any;
  public experienceData: any;
  public currentPaginateIndex: number = 1;
  public interval: any;

  constructor(private store: Store, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.experienceData$ = this.store.select(selectExperienceDetails);
    this.experienceData$.subscribe((res: any) => {
      this.experienceData = res;
    })
    this.autoSlide();
  }

  paginate(index: number) {
    this.currentPaginateIndex = index;
    const container = this.elementRef.nativeElement.querySelector(`.custom-style`);
    const el = this.elementRef.nativeElement.querySelector(`#div${index}`);
    if (container && el) {
      container.scrollLeft = el.offsetLeft - container.offsetLeft;
    }
  }

  setPager() {
    if (this.currentPaginateIndex === this.experienceData.details.length) {
      this.currentPaginateIndex = 1;
    } else {
      this.currentPaginateIndex = this.currentPaginateIndex + 1;
    }

    this.paginate(this.currentPaginateIndex);
  }

  autoSlide() {
    this.interval = setInterval(() => {
      this.setPager();
    }, 2500)
  }

  mouseEnter() {
    clearInterval(this.interval);
  }

  mouseOut() {
    this.autoSlide();
  }
}

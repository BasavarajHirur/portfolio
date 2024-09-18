import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-details',
  templateUrl: './experience-details.component.html',
  styleUrls: ['./experience-details.component.scss']
})
export class ExperienceDetailsComponent implements OnInit {
  @Input('experienceData') experienceData: any;
  public currentPaginateIndex: number = 1;

  public interval: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
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

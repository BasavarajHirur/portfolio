import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Get_Company_Project_Details, selectExperienceDetails, selectProjectModalState, show_project_modal } from 'src/app/store';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, OnDestroy {
  public experienceData$: any;
  public experienceData: any;
  public currentPaginateIndex: number = 1;
  public interval: any;
  public showModalDetails = false;

  private destroy$ = new Subject<void>();
  public isSmallScreen = window.innerWidth < 1024;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = event.target.innerWidth < 1024;
  }

  constructor(private store: Store, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.experienceData$ = this.store.select(selectExperienceDetails);
    this.experienceData$.pipe(takeUntil(this.destroy$))
      .subscribe((res: any) => {
        this.experienceData = res;
      })
    this.autoSlide();
    this.modalDetails();
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

  modalDetails() {
    this.store.select(selectProjectModalState)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.showModalDetails = res;
        const bodyStyle = document.body.style;
        res ?
          bodyStyle.overflow = 'hidden'
          : bodyStyle.overflow = 'auto'
      })
  }

  showExpModalDetials(condition: boolean, companyId: string) {
    this.store.dispatch(show_project_modal({ isShowing: condition }));
    this.store.dispatch(Get_Company_Project_Details({ companyId}));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

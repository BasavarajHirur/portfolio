import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Get_Selected_Skill, selectPrimarySkillsDetails, selectSkillModalState, show_skill_modal } from 'src/app/store';

@Component({
  selector: 'app-primary-skills',
  templateUrl: './primary-skills.component.html',
  styleUrls: ['./primary-skills.component.scss']
})
export class PrimarySkillsComponent implements OnInit, OnDestroy {
  public primarySkills$: any;
  public primarySkills: any = [];
  public showDetails = false;

  private destroy$ = new Subject<void>();
  public isSmallScreen = window.innerWidth < 1024;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSmallScreen = event.target.innerWidth < 1024;
  }


  constructor(private store: Store, private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.primarySkills$ = this.store.select(selectPrimarySkillsDetails);
    this.primarySkills$.pipe(takeUntil(this.destroy$))
      .subscribe((res: any) => {
        this.primarySkills = res;
      })
    this.modalDetails();
  }

  showSkillModalDetials(condition: boolean, skillLabel: string) {
    this.store.dispatch(show_skill_modal({ isShowing: condition }));
    this.store.dispatch(Get_Selected_Skill({ skill: skillLabel }));
  }

  modalDetails() {
    this.store.select(selectSkillModalState)
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.showDetails = res;
        const bodyStyle = document.body.style;
        res ?
          bodyStyle.overflow = 'hidden'
          : bodyStyle.overflow = 'auto'
      })
  }

  getContainrDetails() {
    const el = this.elementRef.nativeElement.querySelector('#skill-container');
    const elWidth = el.scrollLeft;
    const width = el.offsetWidth;
    return { el, elWidth, width }
  }

  forward() {
    const { el, width, elWidth } = this.getContainrDetails();
    el.scrollLeft = -(width + elWidth + 10);
  }

  reverse() {
    const { el, width, elWidth } = this.getContainrDetails();
    el.scrollLeft = width + elWidth;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

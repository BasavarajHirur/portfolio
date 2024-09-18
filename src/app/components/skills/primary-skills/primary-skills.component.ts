import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPrimarySkillsDetails, selectSkillModalState, show_skill_modal } from 'src/app/store';

@Component({
  selector: 'app-primary-skills',
  templateUrl: './primary-skills.component.html',
  styleUrls: ['./primary-skills.component.scss']
})
export class PrimarySkillsComponent implements OnInit {
  public primarySkills$: any;
  public primarySkills: any = [];
  public showDetails = false;

  constructor(private store: Store, private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.primarySkills$ = this.store.select(selectPrimarySkillsDetails);
    this.primarySkills$.subscribe((res: any) => {
      this.primarySkills = res;
    })
    this.modalDetails();
  }

  showSkillModalDetials(condition: boolean) {
    this.store.dispatch(show_skill_modal({ isShowing: condition }));
  }

  modalDetails() {
    this.store.select(selectSkillModalState).subscribe(res => {
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
}

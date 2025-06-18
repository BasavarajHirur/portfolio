import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectModalSkillDetails, show_skill_modal } from 'src/app/store';

@Component({
  selector: 'app-skill-modal',
  templateUrl: './skill-modal.component.html',
  styleUrls: ['./skill-modal.component.scss']
})
export class SkillModalComponent implements OnInit, OnDestroy {

  public skillDetails: any;
  private destroy$ = new Subject<void>();
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectModalSkillDetails)
      .pipe(takeUntil(this.destroy$)).subscribe(
        res => {
          this.skillDetails = res
          console.log(res)
        }
      )
  }

  closeSkillDetials(condition: boolean) {
    this.store.dispatch(show_skill_modal({ isShowing: condition }));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

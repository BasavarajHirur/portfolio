import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectSecondarySkillDetails } from 'src/app/store';

@Component({
  selector: 'app-secondary-skills',
  templateUrl: './secondary-skills.component.html',
  styleUrls: ['./secondary-skills.component.scss']
})

export class SecondarySkillsComponent implements OnInit, OnDestroy {
  public secondarySkills$: any;
  public secondarySkills: any = [];

  private destroy$ = new Subject<void>();

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.secondarySkills$ = this.store.select(selectSecondarySkillDetails);
    this.secondarySkills$.pipe(takeUntil(this.destroy$))
      .subscribe((res: any) => {
        this.secondarySkills = res;
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

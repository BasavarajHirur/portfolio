import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectOtherSkillDetails } from 'src/app/store';

@Component({
  selector: 'app-other-skills',
  templateUrl: './other-skills.component.html',
  styleUrls: ['./other-skills.component.scss']
})
export class OtherSkillsComponent implements OnInit {
  public otherSkills$: any;
  public otherSkills: any = [];

  private destroy$ = new Subject<void>();

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.otherSkills$ = this.store.select(selectOtherSkillDetails);
    this.otherSkills$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: any) => {
        this.otherSkills = res;
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

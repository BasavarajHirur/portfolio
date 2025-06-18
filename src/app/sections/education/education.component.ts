import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { pipe, Subject, takeUntil } from 'rxjs';
import { selectEducationDetails } from 'src/app/store';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit, OnDestroy {
  public graduationDetails: any;
  public intermediateDetails: any;
  public highSchoolDetails: any;

  private destroy$ = new Subject<void>();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectEducationDetails).
      pipe(takeUntil(this.destroy$))
      .subscribe(
        res => {
          this.graduationDetails = res.graduate;
          this.intermediateDetails = res.intermediate;
          this.highSchoolDetails = res.highSchool;
        }
      )
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectedCompanyProjectDetails } from 'src/app/store';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  public projectDetails: any;
  private destroy$ = new Subject<void>();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectedCompanyProjectDetails)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        res => {
          this.projectDetails = res;
        }
      )
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

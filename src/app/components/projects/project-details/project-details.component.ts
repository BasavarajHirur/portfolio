import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectedCompany, show_project_modal } from 'src/app/store';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  public selectedCompanyDetails: any;
  private destroy$ = new Subject<void>();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectedCompany)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        res => {
          console.log(res)
          this.selectedCompanyDetails = res;
        }
      )
  }

  closeSkillDetials(condition: boolean) {
    this.store.dispatch(show_project_modal({ isShowing: condition }));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

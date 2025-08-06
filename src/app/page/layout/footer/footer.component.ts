import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectContactDetails } from 'src/app/store';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  public primaryContact: any;
  public contactDetails: any;
  private destroy$ = new Subject<void>();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectContactDetails)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (res: any) => {
          if (res) {
            this.primaryContact = res.primary;
            this.contactDetails = res;
          }
        }
      )
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

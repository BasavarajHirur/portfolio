import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectContactDetails } from 'src/app/store';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  public primaryContact: any;
  public contactDetails: any;
  private destroy$ = new Subject<void>();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectContactDetails)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (res: any) => {
          this.primaryContact = res.primary;
          this.contactDetails = res;
        }
      )
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

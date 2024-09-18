import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectContactDetails } from 'src/app/store';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public primaryContact: any;
  public socialMediaDetails: any;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectContactDetails).subscribe(
      (res: any) => {
        this.primaryContact = res.primary;
        this.socialMediaDetails = res.social;
      }
    )
  }
}

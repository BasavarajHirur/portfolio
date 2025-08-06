import { Component, OnInit } from '@angular/core';
import { Store_User_data } from './store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(Store_User_data());
  }
}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUserData, Store_User_data } from 'src/app/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public data$!: Observable<any>;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(Store_User_data());
    this.data$ = this.store.select(selectUserData);
  }
}

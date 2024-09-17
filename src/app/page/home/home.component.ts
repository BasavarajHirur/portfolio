import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public data$!: Observable<any>;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.data$ = this.service.getData();
  }
}

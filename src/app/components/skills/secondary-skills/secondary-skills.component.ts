import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSecondarySkillDetails } from 'src/app/store';

@Component({
  selector: 'app-secondary-skills',
  templateUrl: './secondary-skills.component.html',
  styleUrls: ['./secondary-skills.component.scss']
})

export class SecondarySkillsComponent implements OnInit {
  public secondarySkills$: any;
  public secondarySkills: any = [];

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.secondarySkills$ = this.store.select(selectSecondarySkillDetails);
    this.secondarySkills$.subscribe((res: any) => {
      this.secondarySkills = res;
    })
  }
}

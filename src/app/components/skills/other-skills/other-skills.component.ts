import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectOtherSkillDetails } from 'src/app/store';

@Component({
  selector: 'app-other-skills',
  templateUrl: './other-skills.component.html',
  styleUrls: ['./other-skills.component.scss']
})
export class OtherSkillsComponent implements OnInit {
  public otherSkills$: any;
  public otherSkills: any = [];

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.otherSkills$ = this.store.select(selectOtherSkillDetails);
    this.otherSkills$.subscribe((res: any) => {
      this.otherSkills = res;
    })
  }
}

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { show_skill_modal } from 'src/app/store';

@Component({
  selector: 'app-skill-experience-details',
  templateUrl: './skill-experience-details.component.html',
  styleUrls: ['./skill-experience-details.component.scss']
})
export class SkillExperienceDetailsComponent {

  constructor(private store: Store) { }

  closeSkillDetials(condition: boolean) {
    this.store.dispatch(show_skill_modal({ isShowing: condition }));
  }
}

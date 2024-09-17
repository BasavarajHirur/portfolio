import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-skills',
  templateUrl: './secondary-skills.component.html',
  styleUrls: ['./secondary-skills.component.scss']
})

export class SecondarySkillsComponent implements OnInit {
  @Input('technicalSkills') technicalSkills: any;
  public secondarySkills: any = [];

  ngOnInit(): void {
    this.secondarySkills = this.technicalSkills.primary.details;
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-skills',
  templateUrl: './primary-skills.component.html',
  styleUrls: ['./primary-skills.component.scss']
})
export class PrimarySkillsComponent implements OnInit {
  @Input('technicalSkills') technicalSkills: any;
  public primarySkills: any = [];

  ngOnInit(): void {
    this.primarySkills = this.technicalSkills.primary.details;
  }
}

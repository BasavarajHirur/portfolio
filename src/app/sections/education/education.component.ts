import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectEducationDetails } from 'src/app/store';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  public graduationDetails: any;
  public intermediateDetails: any;
  public highSchoolDetails: any;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectEducationDetails).subscribe(
      res => {
        this.graduationDetails = res.graduate;
        this.intermediateDetails = res.intermediate;
        this.highSchoolDetails = res.highSchool;
      }
    )
  }
}

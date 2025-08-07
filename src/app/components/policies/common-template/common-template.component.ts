import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-template',
  templateUrl: './common-template.component.html',
  styleUrls: ['./common-template.component.scss']
})
export class CommonTemplateComponent implements OnInit {
  @Input() data: { label: string, content: string[] }[] = [];

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-template',
  templateUrl: './common-template.component.html',
  styleUrls: ['./common-template.component.scss']
})
export class CommonTemplateComponent {
  @Input() data: { label: string, content: string[] }[] = [];
}

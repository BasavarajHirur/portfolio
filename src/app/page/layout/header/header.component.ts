import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() sectionScroll = new EventEmitter<string>();

  public isOpen = false;
  public selectedSection = 'profile';

  scrollTo(section: string) {
    this.selectedSection = section;
    this.sectionScroll.emit(section);
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}

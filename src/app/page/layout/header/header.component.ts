import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input('activeSection') activeSection!: string;
  @Output() sectionScroll = new EventEmitter<string>();

  public isOpen = false;
  public bgOpacity = 0;
  public menuItems = ['profile', 'experience', 'skills', 'education', 'contact'];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const maxScroll = 200; // distance until fully opaque
    const scroll = window.scrollY;
    this.bgOpacity = Math.min(scroll / maxScroll, 1); // smoothly increase from 0 to 1
  }

  scrollTo(section: string) {
    this.sectionScroll.emit(section);
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}

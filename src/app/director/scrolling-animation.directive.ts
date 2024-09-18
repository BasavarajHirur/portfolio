import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollingAnimation]'
})
export class ScrollingAnimationDirective implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    console.log('initialized');
    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = this.el.nativeElement.id;
          this.startAnimation(id);
          observer.unobserve(this.el.nativeElement)
        }
      })
    }, option);
    observer.observe(this.el.nativeElement);
  }

  startAnimation(id: string) {
    this.renderer.addClass(this.el.nativeElement, `animate-${id}-class`);
  }
}

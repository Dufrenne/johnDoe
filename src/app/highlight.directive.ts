import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    //el.nativeElement.style.backgroundColor ='yellow';
    //el.nativeElement.style.fontSize ='40px';
  }


  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
 


  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  ngOnInit() {
  }

}



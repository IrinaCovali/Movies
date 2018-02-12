import { Directive, ElementRef , HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverClass]'
})
export class HoverClassDirective {
  
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.addClass('in');
  }

  @HostListener('mouseleave') onMouseLeave() {
     this.addClass('out')
  }

  private getDirection () {
    let w = this.el.nativeElement.offsetWidth,
        h = this.el.nativeElement.offsetHeight,
        x = (event.pageX - this.el.nativeElement.offsetLeft - (w / 2) * (w > h ? (h / w) : 1)),
        y = (event.pageY - this.el.nativeElement.offsetTop - (h / 2) * (h > w ? (w / h) : 1)),
        d = Math.round( Math.atan2(y, x) / 1.57079633 + 5 ) % 4;
      return d;
        
    };

    private  addClass ( state ) {
      let direction = this.getDirection( ),
        class_suffix = "";
    
      this.el.nativeElement.className = "";
      
      switch ( direction ) {
        case 0 : class_suffix = '-top';    break;
        case 1 : class_suffix = '-right';  break;
        case 2 : class_suffix = '-bottom'; break;
        case 3 : class_suffix = '-left';   break;
      }

      this.el.nativeElement.className = state + class_suffix;
        
    };

}

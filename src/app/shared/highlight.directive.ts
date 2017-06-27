import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef,
              private renderer:Renderer
  ) {
    // el.nativeElement.style.backgroundColor= 'red'
    renderer.setElementStyle(el.nativeElement,'backgroundColor','yellow')
  }

}

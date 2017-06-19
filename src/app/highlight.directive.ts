/**
 * Created by sam on 2017/6/19.
 */
import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector:'[highlight]'
})
export class HighlightDirective{
  constructor(
    private el:ElementRef,
    private renderer:Renderer
  ){
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow')
  }
}

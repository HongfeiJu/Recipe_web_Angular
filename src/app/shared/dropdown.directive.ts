import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') open = false;

  constructor(private element: ElementRef, private renderer2: Renderer2) { }

  @HostListener('click') onclick () {
    this.open = !this.open;
  }

}

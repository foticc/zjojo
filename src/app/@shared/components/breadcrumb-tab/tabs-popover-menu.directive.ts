import { Directive, ElementRef, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTabsPopoverMenu]',
})
export class TabsPopoverMenuDirective {
  constructor(private el: ElementRef, private viewContainer: ViewContainerRef) {}

  @Input() content: TemplateRef<any>;

  @HostListener('contextmenu')
  onMouseRightClick() {
    this.viewContainer.createEmbeddedView(this.content);
    console.log(this.content.elementRef.nativeElement);
  }
}

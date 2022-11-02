import { Component, Input, OnInit } from '@angular/core';
import { AccordionItemClickEvent } from 'ng-devui';
import { MenuClickServiceService } from './menu-click-service.service';

@Component({
  selector: 'da-side-menu',
  templateUrl: './side-draw.component.html',
  styleUrls: ['./side-draw.component.scss'],
})
export class SideMenuComponent implements OnInit {
  @Input() data: any;

  constructor(private menuItemChange: MenuClickServiceService) {}

  ngOnInit(): void {}

  itemClick(event: AccordionItemClickEvent) {
    this.menuItemChange.toggle(event);
  }
}

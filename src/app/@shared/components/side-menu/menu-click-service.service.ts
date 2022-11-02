import { Injectable } from '@angular/core';
import { AccordionItemClickEvent } from 'ng-devui';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuClickServiceService {
  data: AccordionItemClickEvent;

  constructor() {}

  toggle(event: AccordionItemClickEvent) {
    this.data = event;
  }

  get menuItem(): Observable<AccordionItemClickEvent> {
    return of(this.data);
  }
}

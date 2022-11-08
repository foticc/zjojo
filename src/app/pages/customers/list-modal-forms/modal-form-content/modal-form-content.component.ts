import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-form-content',
  templateUrl: './modal-form-content.component.html',
  styleUrls: ['./modal-form-content.component.scss'],
})
export class ModalFormContentComponent implements OnInit {
  @Input()
  data: any;

  constructor() {}

  ngOnInit(): void {}
}

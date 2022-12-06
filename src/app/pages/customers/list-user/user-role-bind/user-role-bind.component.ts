import { Component, OnInit, Input } from '@angular/core';
import { TransferDirection } from 'ng-devui';

@Component({
  selector: 'app-user-role-bind',
  templateUrl: './user-role-bind.component.html',
  styleUrls: ['./user-role-bind.component.scss'],
})
export class UserRoleBindComponent implements OnInit {
  @Input() data: any;
  disabled = false;
  targetOption = [];
  sourceOption = [
    { name: 'Option1', value: 1, id: 1, checked: false },
    { name: 'Option2', value: 2, id: 2, checked: false },
    { name: 'Option3', value: 3, id: 3, checked: false },
    { name: 'Option4', value: 3, id: 4, checked: false },
    { name: 'Option5', value: 3, id: 5, checked: false },
    { name: 'Option6', value: 3, id: 6, checked: false },
    { name: 'Option7', value: 3, id: 7, checked: false },
    { name: 'Option8', value: 3, id: 8, checked: false },
    { name: 'Option9', value: 3, id: 9, checked: false },
    { name: 'Option10', value: 3, id: 10, checked: false },
    { name: 'Option11', value: 3, id: 11, checked: false },
    { name: 'Option12', value: 3, id: 12, checked: false },
    { name: 'Option13', value: 3, id: 13, checked: false },
    { name: 'Option14', value: 3, id: 14, checked: false },
    { name: 'Option15', value: 3, id: 15, checked: false },
    { name: 'Option16', value: 3, id: 16, checked: false },
    { name: 'Option17', value: 3, id: 17, checked: false },
    { name: 'Option18', value: 3, id: 18, checked: false },
    { name: 'Option19', value: 3, id: 19, checked: false },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log('this.data', this.data.rowitem.roles);
    this.targetOption = this.data.rowitem.roles.map((m) => {
      return {
        name: m.roleName,
        value: m.roleName,
        id: m.id,
        checked: true,
      };
    });
  }

  afterTransfer(event) {
    console.log(event);
    console.log(TransferDirection[event]);
  }

  transferToTarget(event) {
    console.log('transferToTarget', event);
  }

  transferToSource(event) {
    console.log('transferToSource', event);
  }
}

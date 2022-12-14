import { Component, Input, OnInit } from '@angular/core';
import { FormLayout } from 'ng-devui';
import { DIALOG_PAGE_TYPE } from 'src/app/pages/data/page-field-config';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-role-content',
  templateUrl: './list-role-content.component.html',
  styleUrls: ['./list-role-content.component.scss'],
})
export class ListRoleContentComponent implements OnInit {
  @Input()
  data: any;

  isEdit: boolean;

  formData = {
    roleName: null,
    roleWeight: null,
    description: null,
  };

  verticalLayout: FormLayout = FormLayout.Horizontal;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    console.log('this.data', this.data);
    this.formData = this.data.data;
    this.isEdit = this.data.type == DIALOG_PAGE_TYPE.OPEN;
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  getValue(value) {
    console.log(value);
  }

  everyRange(range) {
    return range.every((_) => !!_);
  }

  submitProjectForm({ valid, directive, data, errors }) {
    console.log('valid', valid);
    console.log('data', data);
    if (valid) {
      // do something
      if (this.data.type == DIALOG_PAGE_TYPE.ADD) {
        this.api.save(data).subscribe((v) => {
          console.log('v', v);
          this.data.onclose();
        });
      } else if (this.data.type == DIALOG_PAGE_TYPE.EDIT) {
        this.api.update(data).subscribe((v) => {
          console.log('v', v);
          this.data.onclose();
        });
      }
    } else {
      // error tip
    }
  }
}

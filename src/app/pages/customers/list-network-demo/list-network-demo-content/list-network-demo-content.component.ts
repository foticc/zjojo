import { Component, Input, OnInit } from '@angular/core';
import { FormLayout } from 'ng-devui';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-list-network-demo-content',
  templateUrl: './list-network-demo-content.component.html',
  styleUrls: ['./list-network-demo-content.component.scss'],
})
export class ListNetworkDemoContentComponent implements OnInit {
  @Input()
  data: any;

  isEdit: boolean;

  formData = {
    name: null,
    path: null,
    desc: null,
  };

  verticalLayout: FormLayout = FormLayout.Horizontal;

  ngOnInit(): void {
    this.formData = this.data.data;
    this.isEdit = this.data.type !== '编辑';
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
    if (valid) {
      // do something
    } else {
      // error tip
    }
  }
}

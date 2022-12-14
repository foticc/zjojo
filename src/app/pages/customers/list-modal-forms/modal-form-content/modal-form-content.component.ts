import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormLayout } from 'ng-devui';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-modal-form-content',
  templateUrl: './modal-form-content.component.html',
  styleUrls: ['./modal-form-content.component.scss'],
})
export class ModalFormContentComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    console.log('this.data', this.data);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  @Input()
  data: any;

  projectFormData = {
    projectName: '',
    projectOwner: null,
    projectExecutor: null,
    projectCycleTime: [null, null],
    projectSecurity: 'Only member visible',
    projectDescription: '',
    projectExerciseDate: [{ id: '1', label: 'Mon' }],
  };

  verticalLayout: FormLayout = FormLayout.Horizontal;

  existprojectNames = ['123', '123456', 'DevUI'];

  checkboxOptions = [
    { id: '1', label: 'Mon' },
    { id: '2', label: 'Tue' },
    { id: '3', label: 'Wed' },
    { id: '4', label: 'Thur' },
    { id: '5', label: 'Fri' },
    { id: '6', label: 'Sat' },
  ];

  securityValue = ['Public', 'Only member visible'];

  OwnerOptions = [
    { id: '1', name: 'Owner1' },
    { id: '2', name: 'Owner2' },
    { id: '3', name: 'Owner3' },
    { id: '4', name: 'Owner4' },
  ];

  ExecutorOptions = [
    { id: '1', name: 'Executor1' },
    { id: '2', name: 'Executor2' },
    { id: '3', name: 'Executor3' },
    { id: '4', name: 'Executor4' },
  ];

  getValue(value) {
    console.log(value);
  }

  everyRange(range) {
    return range.every((_) => !!_);
  }

  checkName(value) {
    let res = true;
    if (this.existprojectNames.indexOf(value) !== -1) {
      res = false;
    }
    return of(res).pipe(delay(500));
  }

  validateDate(value): Observable<string | null> {
    let message = null;
    for (const item of value) {
      if (item.id === '2') {
        message = {
          'zh-cn': `当前日期队列已满`,
          'en-us': 'The task queue on the current execution day (Tuesday) is full.',
        };
      }
    }
    // Returned by the simulated backend interface
    return of(message).pipe(delay(300));
  }

  submitProjectForm({ valid, directive, data, errors }) {
    if (valid) {
      // do something
    } else {
      // error tip
    }
  }
  
}

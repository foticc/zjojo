import { Component, OnInit } from '@angular/core';
import { delay, of } from 'rxjs';
import { DFormData } from 'src/app/@shared/components/dynamic-forms';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss'],
})
export class DynamicFormsComponent implements OnInit {
  formItems: DFormData;
  projectFormData = {
    projectName: '',
    projectOwner: null,
    projectExecutor: null,
    projectLabels: [],
    projectCycleTime: [null, null],
    isPublic: true,
    projectExerciseDate: [{ id: '1', label: 'Mon' }],
  };
  constructor() {}

  ngOnInit(): void {
    this.formItems = {
      name: {
        key: 'projectName',
        type: 'textInput',
        label: 'Project Name',
        required: true,
        hasHelp: true,
        helpTips: 'This is the project name.',
        ui: {
          values: this.projectFormData.projectName,
          placeholder: 'Name',
          validateRules: {
            validators: [
              { required: true },
              { minlength: 3 },
              { maxlength: 128 },
              {
                pattern: /^[a-zA-Z0-9]+(\s+[a-zA-Z0-9]+)*$/,
                message: {
                  'zh-cn': '仅允许输入数字与大小写字母',
                  'en-us': 'The user name cannot contain characters except uppercase and lowercase letters.',
                },
              },
            ],
            asyncValidators: [
              {
                sameName: this.checkName.bind(this),
                message: {
                  'zh-cn': '用户名重名',
                  'en-us': 'Duplicate name.',
                },
              },
            ],
          },
        },
      },
    };
  }

  existProjectNames = ['123', '123456', 'DevUI'];

  checkName(value: string) {
    let res = true;
    if (this.existProjectNames.indexOf(value) !== -1) {
      res = false;
    }
    return of(res).pipe(delay(500));
  }
}

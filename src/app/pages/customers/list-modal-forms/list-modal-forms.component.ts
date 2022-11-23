import { Component, OnInit } from '@angular/core';
import { CellSelectedEventArg, DialogService, RowSelectedEventArg, TableWidthConfig } from 'ng-devui';
import { originSource, SourceType } from 'src/app/@core/mock/originSource';
import { ApiService } from '../../../api/api.service';
import { ModalFormContentComponent } from './modal-form-content/modal-form-content.component';

@Component({
  selector: 'app-list-modal-forms',
  templateUrl: './list-modal-forms.component.html',
  styleUrls: ['./list-modal-forms.component.scss'],
})
export class ListModalFormsComponent implements OnInit {
  basicDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.list));
  dataTableOptions = {
    columns: [
      {
        field: 'avatar',
        header: 'Avatar',
        fieldType: 'image',
      },
      {
        field: 'firstName',
        header: 'First Name',
        fieldType: 'text',
        sortable: true,
      },
      {
        field: 'lastName',
        header: 'Last Name',
        fieldType: 'text',
      },
      {
        field: 'gender',
        header: 'Gender',
        fieldType: 'text',
      },
      {
        field: 'dob',
        header: 'Date of birth',
        fieldType: 'date',
      },
      {
        field: 'description',
        header: 'Description',
        fieldType: 'text',
      },
    ],
  };

  tableWidthConfig: TableWidthConfig[] = [
    {
      field: '#',
      width: '50px',
    },
    {
      field: 'firstName',
      width: '150px',
    },
    {
      field: 'lastName',
      width: '150px',
    },
    {
      field: 'gender',
      width: '150px',
    },
    {
      field: 'dob',
      width: '150px',
    },
  ];
  constructor(private dialogService: DialogService, private api: ApiService) {}

  ngOnInit(): void {
    this.api.permissionPage();
  }

  private openDialog(data: any, type: string) {
    const results = this.dialogService.open({
      id: 'form-dialog',
      width: '700px',
      maxHeight: '500px',
      content: ModalFormContentComponent,
      backdropCloseable: false,
      title: type,
      onClose: () => {},
      buttons: [],
      data: { data, type },
    });
  }

  edit(rowitem) {
    this.openDialog(rowitem, '编辑');
  }

  openItem(e) {
    this.openDialog(e.rowItem, '查看');
    console.log('e', e);
  }
}

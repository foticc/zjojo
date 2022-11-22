import { Component, OnInit } from '@angular/core';
import { DialogService, TableWidthConfig } from 'ng-devui';
import { Observable } from 'rxjs';
import { originSource, SourceType } from 'src/app/@core/mock/originSource';
import { ApiService } from '../api.service';
import { ModalFormColumnContentComponent } from './modal-form-content/modal-form-content.component';

@Component({
  selector: 'app-list-modal-forms-dclumn',
  templateUrl: './list-modal-forms-dclumn.component.html',
  styleUrls: ['./list-modal-forms-dclumn.component.scss'],
})
export class ListModalFormsDclumnComponent implements OnInit {
  limit = 100 * 12 * 30 * 24 * 60 * 60; // three years

  basicDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.list));

  constructor(private dialogService: DialogService, private api: ApiService) {}

  ngOnInit(): void {
   
  }

  private openDialog(data: any, type: string) {
    const results = this.dialogService.open({
      id: 'form-dialog',
      width: '700px',
      maxHeight: '500px',
      content: ModalFormColumnContentComponent,
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

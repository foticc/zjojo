import { Injectable } from '@angular/core';
import { DialogService } from 'ng-devui';

@Injectable({
  providedIn: 'root',
})
export class SimpleDialogService {
  constructor(private dialog: DialogService) {}

  public confirm(content: string, ok?: Function, onClose?: Function) {
    const results = this.dialog.open({
      id: 'dialog-service',
      width: '346px',
      maxHeight: '600px',
      title: '确认',
      content: content,
      backdropCloseable: true,
      dialogtype: 'warning',
      onClose,
      buttons: [
        {
          cssClass: 'primary',
          text: '确认',
          disabled: false,
          handler: ($event: Event) => {
            ok();
          },
        },
        {
          id: 'btn-cancel',
          cssClass: 'common',
          text: '取消',
          handler: ($event: Event) => {
            results.modalInstance.hide();
          },
        },
      ],
      data: {},
    });
    return results;
  }
}

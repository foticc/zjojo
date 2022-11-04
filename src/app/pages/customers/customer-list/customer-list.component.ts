import { Component, NgModule, OnInit } from '@angular/core';
import { TableWidthConfig } from 'ng-devui/data-table';
import { originSource, SourceType } from 'src/app/@core/mock/originSource';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
}

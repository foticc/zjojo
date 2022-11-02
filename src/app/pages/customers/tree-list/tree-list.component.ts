import { Component, OnInit, ViewChild } from '@angular/core';
import { TableWidthConfig } from 'ng-devui/data-table';
import { TreeComponent, TreeNode } from 'ng-devui/tree';
import { SourceType, originSource } from 'src/app/@core/mock/originSource';

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.scss'],
})
export class TreeListComponent implements OnInit {
  role: string;
  iconLeft = '<span class="icon icon-member"></span>';
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

  @ViewChild('basicTree', { static: true }) basicTree: TreeComponent;
  data = [
    {
      title: 'node1',
    },
    {
      title: 'node2',
    },
  ];

  onNodeSelected(treeNode: TreeNode) {
    this.basicDataSource.forEach((f) => {
      f.firstName = treeNode.data.title;
    });
    console.log('selected', treeNode);
  }

  onNodeToggled(treeNode: TreeNode) {
    console.log('Toggled', treeNode);
  }
}

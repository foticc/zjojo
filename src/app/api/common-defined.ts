export interface CommonResult {
  code: number;
  data: any[] | boolean | number | number | { [key: string]: any } | null | string;
  msg: string;
}

export interface DataDomainPage {
  content: [];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: DataDomainPageSort;
  totalElements: number;
  totalPages: number;
}

export interface Pageable {
  offset: number;
  paged: boolean;
  pageNumber: number;
  pageSize: number;
  sort: PageableSort;
  unpaged: boolean;
}

export interface PageableSort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface DataDomainPageSort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

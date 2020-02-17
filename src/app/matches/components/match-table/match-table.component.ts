import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gnm-match-table',
  templateUrl: './match-table.component.html',
  styleUrls: ['./match-table.component.scss'],
})
export class MatchTableComponent implements OnInit {
  columnDefs = [
    { headerName: 'Field', field: 'make', filter: true, sortable: true },
    { field: 'model' },
    { field: 'price' },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ];

  constructor() {}

  ngOnInit(): void {}
}

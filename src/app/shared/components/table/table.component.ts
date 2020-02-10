import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gnm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('data') data: Array<any>;
  @Input('headers') headers: string[];

  constructor() { }

  ngOnInit(): void {
  }

}

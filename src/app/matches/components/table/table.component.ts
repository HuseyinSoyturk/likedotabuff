import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITableElements } from '../../models/ITableElements';

@Component({
  selector: 'gnm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  dataSource: ITableElements[];
  displayedColumns: string[] = ['name', 'matchNumber'];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://api.opendota.com/api/players/168242047/matches').subscribe(res => {
      debugger
    })
  }

}

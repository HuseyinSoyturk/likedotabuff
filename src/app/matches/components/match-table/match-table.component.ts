import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestService } from 'src/app/shared/services/request.service';
import { IMatch } from 'src/app/shared/models/IMatch';

@Component({
  selector: 'gnm-match-table',
  templateUrl: './match-table.component.html',
  styleUrls: ['./match-table.component.scss'],
})
export class MatchTableComponent implements OnInit {
  columnDefs = [
    { headerName: 'Mac Id', field: 'match_id' },
    { headerName: 'Hero', field: 'hero_id', filter: true, sortable: true },
    { headerName: 'Kill', field: 'kills', filter: true, sortable: true },
    { headerName: 'Asist', field: 'assists', filter: true, sortable: true },
    { headerName: 'Olum', field: 'deaths', filter: true, sortable: true },
    { headerName: 'Mac Sonucu', field: 'radiant_win', filter: true, sortable: true },
  ];

  rowData: IMatch[];

  constructor(private requestService: RequestService) {}

  ngAfterViewInit(): void {
    this.requestService.getMatchList().subscribe(response => {
      this.rowData = response;
    });
  }
  ngOnInit(): void {}
}

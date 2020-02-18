import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';
import { IMatch } from 'src/app/shared/models/IMatch';
import { Store, createSelector, select } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { IHero } from 'src/app/shared/models/IHero';
import { take } from 'rxjs/operators';

@Component({
  selector: 'gnm-match-table',
  templateUrl: './match-table.component.html',
  styleUrls: ['./match-table.component.scss'],
})
export class MatchTableComponent {
  columnDefs = [
    { headerName: 'Mac Id', field: 'match_id', resizable: true },
    { headerName: 'Hero', field: 'hero_name', filter: true, sortable: true, resizable: true },
    { headerName: 'Kill', field: 'kills', filter: true, sortable: true, resizable: true },
    { headerName: 'Asist', field: 'assists', filter: true, sortable: true, resizable: true },
    { headerName: 'Olum', field: 'deaths', filter: true, sortable: true, resizable: true },
    { headerName: 'Mac Sonucu', field: 'radiant_win', filter: true, sortable: true, resizable: true },
  ];

  rowData: IMatch[];
  state: AppState;

  constructor(private requestService: RequestService, private store: Store<AppState>) {}

  ngAfterViewInit(): void {
    this.requestService.getHeroes().subscribe(heroes => {
      this.requestService.getMatchList().subscribe(response => {
        response.forEach(match => (match.hero_name = heroes.find(obj => obj.id === match.hero_id).localized_name));
        this.rowData = response;
      });
    });
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }
}

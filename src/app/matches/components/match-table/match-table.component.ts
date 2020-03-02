import { Component, OnInit } from "@angular/core";
import { RequestService } from "src/app/shared/services/request.service";
import { IMatch } from "src/app/shared/models/IMatch";
import { Store, createSelector, select } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducer";
import { GridApi } from "ag-grid-community";
import { MatDialog } from "@angular/material/dialog";
import { MatchModalComponent } from "../match-modal/match-modal.component";
import { UtilityService } from "src/app/shared/services/utility.service";

@Component({
  selector: "gnm-match-table",
  templateUrl: "./match-table.component.html",
  styleUrls: ["./match-table.component.scss"]
})
export class MatchTableComponent {
  columnDefs = [
    { headerName: "Mac Id", field: "match_id", resizable: true },
    {
      headerName: "Hero",
      field: "hero_name",
      filter: true,
      sortable: true,
      resizable: true
    },
    {
      headerName: "Kill",
      field: "kills",
      filter: true,
      sortable: true,
      resizable: true
    },
    {
      headerName: "Asist",
      field: "assists",
      filter: true,
      sortable: true,
      resizable: true
    },
    {
      headerName: "Olum",
      field: "deaths",
      filter: true,
      sortable: true,
      resizable: true
    },
    {
      headerName: "Mac Tarihi",
      field: "match_date",
      filter: true,
      sortable: true,
      resizable: true
    },
    {
      headerName: "Mac Suresi",
      field: "match_duration",
      filter: true,
      sortable: true,
      resizable: true
    },
    {
      headerName: "Mac Sonucu",
      field: "match_result",
      filter: true,
      sortable: true,
      resizable: true
    }
  ];

  rowData: IMatch[];
  state: AppState;

  gridApi: GridApi;

  constructor(
    private requestService: RequestService,
    private utilityService: UtilityService,
    private store: Store<AppState>,
    public dialog: MatDialog
  ) {}

  ngAfterViewInit(): void {
    this.requestService.getHeroes().subscribe(heroes => {
      this.requestService.getMatchList().subscribe(response => {
        response.forEach(match => {
          match.hero_name = heroes.find(
            obj => obj.id === match.hero_id
          ).localized_name;
          const isRadiant = match.player_slot < 128;
          if (isRadiant === match.radiant_win) {
            match.match_result = "Galibiyet";
          } else {
            match.match_result = "Yenilgi";
          }
          match.match_duration = this.utilityService.secondToMin(
            match.duration
          );
          match.match_date = this.utilityService.pastSecondToDate(
            match.start_time
          );
        });
        this.rowData = response;
      });
    });
  }

  onFirstDataRendered(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  onSelectRow() {
    const selectedRows = this.gridApi.getSelectedRows();
    this.dialog.open(MatchModalComponent, {
      width: "80%",
      data: selectedRows[0].match_id
    });
  }
}

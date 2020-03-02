import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { RequestService } from "src/app/shared/services/request.service";
import { IMatchModalData } from "src/app/shared/models/IModalDataModels";
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: "gnm-match-modal",
  templateUrl: "./match-modal.component.html",
  styleUrls: ["./match-modal.component.scss"]
})
export class MatchModalComponent {
  constructor(
    private requestService: RequestService,
    private utilityService: UtilityService,
    public dialogRef: MatDialogRef<MatchModalComponent>,
    @Inject(MAT_DIALOG_DATA) public match_id: number
  ) {}

  matchData: IMatchModalData;
  winningTeam: "Radiant" | "Dire";
  pageLoaded: boolean = false;
  matchDuration : string

  ngAfterViewInit(): void {
    this.requestService.getMatchInfo(this.match_id).subscribe(response => {
      this.matchData = response;
      this.winningTeam = response.radiant_win ? "Radiant" : "Dire";
      this.matchDuration = this.utilityService.secondToMin(response.duration)
      this.pageLoaded = true;

    });
  }
}

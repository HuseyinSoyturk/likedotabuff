import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMatchModalData } from 'src/app/shared/models/ModalDataModels';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'gnm-match-modal',
  templateUrl: './match-modal.component.html',
  styleUrls: ['./match-modal.component.scss'],
})
export class MatchModalComponent {
  constructor(
    private requestService: RequestService,
    public dialogRef: MatDialogRef<MatchModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: IMatchModalData,
  ) {}

  ngAfterViewInit(): void {
    this.requestService.getMatchInfo(this.modalData.match_id).subscribe(response => {});
  }
}

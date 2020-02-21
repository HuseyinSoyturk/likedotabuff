import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesRoutingModule } from './matches-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatchTableComponent } from './components/match-table/match-table.component';
import { MatchModalComponent } from './components/match-modal/match-modal.component';


@NgModule({
  declarations: [MatchTableComponent, MatchModalComponent],
  imports: [
    CommonModule,
    MatchesRoutingModule,
    SharedModule
  ]
})
export class MatchesModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchTableComponent } from './components/match-table/match-table.component';

const routes: Routes = [{ path: '', component: MatchTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchesRoutingModule {}

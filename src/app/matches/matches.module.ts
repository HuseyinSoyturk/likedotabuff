import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesRoutingModule } from './matches-routing.module';
import { ComponentsComponent } from './components/components.component';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [ComponentsComponent, TableComponent],
  imports: [
    CommonModule,
    MatchesRoutingModule,
    MatTableModule
  ]
})
export class MatchesModule { }

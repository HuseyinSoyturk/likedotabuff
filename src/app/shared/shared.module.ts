import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
import { AgGridModule } from 'ag-grid-angular';

const materialModules = [MatToolbarModule, MatIconModule, MatButtonModule, MatTableModule];

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, ...materialModules, AgGridModule.withComponents([])],
  exports: [...materialModules, AgGridModule],
})
export class SharedModule {}

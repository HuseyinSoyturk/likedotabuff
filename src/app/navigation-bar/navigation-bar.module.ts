import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavigationBarComponent } from './navigation-bar.component';


@NgModule({
  declarations: [NavigationBarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [NavigationBarComponent]
})
export class NavigationBarModule { }

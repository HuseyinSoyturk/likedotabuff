import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarRoutingModule } from './navigation-bar-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavigationBarComponent } from './navigation-bar.component';


@NgModule({
  declarations: [NavigationBarComponent],
  imports: [
    CommonModule,
    NavigationBarRoutingModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [NavigationBarComponent]
})
export class NavigationBarModule { }

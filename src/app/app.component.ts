import { Component } from '@angular/core';
import { RequestService } from './shared/services/request.service';

@Component({
  selector: 'gnm-root',
  template: `
    <gnm-navigation-bar></gnm-navigation-bar>
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'DotaBuffForGnm';

  constructor(private startService: RequestService) {}

  ngAfterViewInit(): void {
    this.startService.getHeroes().subscribe(response => {});
  }
}

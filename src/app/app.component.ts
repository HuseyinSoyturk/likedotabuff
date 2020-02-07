import { Component } from '@angular/core';

@Component({
  selector: 'gnm-root',
  template: `
    <gnm-navigation-bar></gnm-navigation-bar>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'DotaBuffForGnm';
}

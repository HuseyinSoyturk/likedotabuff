import { Component } from '@angular/core';

@Component({
  selector: 'gnm-root',
  template: `
  <button class="btn btn-success">GELDIM</button>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'DotaBuffForGnm';
}

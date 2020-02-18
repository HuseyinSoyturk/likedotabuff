import { Component } from '@angular/core';
import { RequestService } from './shared/services/request.service';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.reducer';
import { SetHeroList } from './store/app.actions';

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

  constructor(private startService: RequestService, private store: Store<AppState>) {}

  ngAfterViewInit(): void {
    this.startService.getHeroes().subscribe(response => {
      this.store.dispatch(new SetHeroList(response));
    });
  }
}

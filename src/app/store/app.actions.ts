import { Action } from '@ngrx/store';
import { IHero } from '../shared/models/IHero';

export const RESET_STATE = '[App] Reset State';
export const SET_HERO_LIST = '[App] Set Hero List';

export class ResetState implements Action {
  readonly type = RESET_STATE;
  constructor() {}
}

export class SetHeroList implements Action {
  readonly type = SET_HERO_LIST;
  constructor(public payload: IHero[]) {}
}

export type AppActions = ResetState | SetHeroList;

import { IHero } from '../shared/models/IHero';
import * as appActions from './app.actions';

export interface AppState {
  heroList: IHero[];
}

const initialState: AppState = {
  heroList: [],
};

export function appReducer(state = initialState, action: appActions.AppActions) {
  switch (action.type) {
    case appActions.RESET_STATE:
      state = initialState;
      return { ...state };
    case appActions.SET_HERO_LIST:
      return { ...state, heroList: action.payload };
    default:
      return;
  }
}

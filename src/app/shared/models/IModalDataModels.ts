import { IPlayerInMatch } from './IPlayerInMatch';

export interface IMatchModalData {
  match_id: number;
  barracks_status_dire: number;
  barracks_status_radiant: number;
  dire_score: number;
  duration: number;
  first_blood_time: number;
  game_mode: number;
  human_players: number;
  lobby_type: number;
  match_seq_num: number;
  positive_votes: number;
  radiant_score: number;
  radiant_win: true;
  start_time: number;
  tower_status_dire: number;
  tower_status_radiant: number;
  players: IPlayerInMatch;
  all_word_counts: {};
  my_word_counts: {};
}

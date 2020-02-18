export interface IMatch {
  assists: number;
  deaths: number;
  duration: number;
  game_mode: number;
  hero_id: number;
  hero_name?: string;
  kills: number;
  leaver_status: number;
  lobby_type: number;
  match_id: number;
  party_size: number;
  player_slot: 4;
  radiant_win: boolean;
  skill: number;
  start_time: number;
  version: number;
}

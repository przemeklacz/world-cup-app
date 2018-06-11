export interface Match {
  name: number;
  type: string;
  home_team: number;
  away_team: number;
  home_result: number;
  away_result: number;
  date: Date;
  stadium: number;
  channels: number[];
  finished: boolean;
  matchday: number;
}
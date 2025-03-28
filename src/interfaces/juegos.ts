export interface Juegos {
    response: Response;
  }
  
  export interface Response {
    total_count: number;
    games: Game[];
  }
  
  export interface Game {
    appid: number;
    name: string;
    playtime_2weeks: number;
    playtime_forever: number;
    img_icon_url: string;
    iconoUrl?: string;
  }
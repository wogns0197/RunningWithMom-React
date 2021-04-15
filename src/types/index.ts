export enum Strength {
  HARD = 'hard',
  NORMAL = 'normal',
  EASY = 'easy',
}

export enum Weather {
  RAIN = 'rain',
  SUNNY = 'sunny',
  CLOUD = 'cloud',
  FOGGY = 'foggy',
  WIND = 'wind',
  SNOW = 'snow',
}

export interface Record {
  today: {
    year: number,
    month: number,
    day: number,
  },  
  goal?: number,
  records: number,
  weather: Weather,
  strength: Strength,
};
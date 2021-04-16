export enum Strength {
  HARD = 'HARD',
  NORMAL = 'NORMAL',
  EASY = 'EASY',
}

export enum Weather {
  RAIN = 'RAIN',
  SUNNY = 'SUNNY',
  CLOUD = 'CLOUD',
  FOGGY = 'FOGGY',
  WIND = 'WIND',
  SNOW = 'SNOW',
}

export interface Record {
  year: number,
  month: number,
  day: number,
  goal?: number,
  records: number,
  weather: Weather,
  strength: Strength,
  memo?: string,
};

// export function stringToEnum<T>(targetEnum: T, str: string): T[keyof T]{
//   return targetEnum[str];
// };
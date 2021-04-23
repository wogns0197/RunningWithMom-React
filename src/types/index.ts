export enum Strength {
  HARD = 'HARD',
  NORMAL = 'NORMAL',
  EASY = 'EASY',
}

;

export enum Weather {
  RAIN = 'RAIN',
  SUNNY = 'SUNNY',
  CLOUD = 'CLOUD',
  FOGGY = 'FOGGY',
  WIND = 'WIND',
  SNOW = 'SNOW',
}

;

export interface Record {
  key: string[],
  year: number,
  month: number,
  day: number,
  goal: number,
  records: number,
  weather: Weather,
  strength: Strength,
  memo?: string,
};

export interface IsMobile {
  isMobile: boolean,
};

export type ChartDataType = {
  id: string | number,
  title?: React.ReactNode,
  ranges: number[],
  measures: number[],
  markers?: number[],
};

export interface CalendarDatum {
  day: string
  value: number
};

export interface CalendarDayData {
  date: Date
  day: string
  value?: number
  color: string
  size: number
  x: number
  y: number
};


// export interface RouterProps {
//   history: History;
// }

// export function stringToEnum<T>(targetEnum: T, str: string): T[keyof T]{
//   return targetEnum[str];
// };
import IC_CLOUD from '../assets/IC_cloud.png';
import IC_FOGGY from '../assets/IC_foggy.png';
import IC_RAIN from '../assets/IC_rain.png';
import IC_SNOW from '../assets/IC_snow.png';
import IC_SUNNY from '../assets/IC_sunny.png';
import IC_WIND from '../assets/IC_wind.png';
import arrow from '../assets/arrow.png';
import back from '../assets/back.png';
import favicon from '../assets/exercise.png';
import runningGIF from '../assets/runningGIF.gif';

export const ICON_FAVICON = favicon;
export const GIF_RUNNING = runningGIF;
export const ICON_BACK = back;
export const IC_ARROW = arrow;
export const ICON_WEATHER: { [key: string]: string} = {
  SUNNY: IC_SUNNY,
  CLOUD: IC_CLOUD,
  SNOW: IC_SNOW,
  WIND: IC_WIND,
  RAIN: IC_RAIN,
  FOGGY: IC_FOGGY,
}
// export const ICON_MENU = menu;
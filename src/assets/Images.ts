import IC_CLOUD from '../assets/IC_cloud.png';
import IC_FOGGY from '../assets/IC_foggy.png';
import IC_RAIN from '../assets/IC_rain.png';
import IC_SNOW from '../assets/IC_snow.png';
import IC_SUNNY from '../assets/IC_sunny.png';
import IC_WIND from '../assets/IC_wind.png';
import arrow from '../assets/arrow.png';
import back from '../assets/back.png';
import cancle from '../assets/cancel.png';
import edit from '../assets/edit.png';
import favicon from '../assets/exercise.png';
import negative from '../assets/negative.png';
import reset from '../assets/reset.png';
import runningGIF from '../assets/runningGIF.gif';

export const ICON_FAVICON = favicon;
export const GIF_RUNNING = runningGIF;
export const ICON_BACK = back;
export const IC_ARROW = arrow;
export const IC_CANCLE = cancle;
export const IC_EDIT = edit;
export const IC_NEGATIVE = negative;
export const IC_RESET = reset;
export const ICON_WEATHER: { [key: string]: string } = {
  SUNNY: IC_SUNNY,
  CLOUD: IC_CLOUD,
  SNOW: IC_SNOW,
  WIND: IC_WIND,
  RAIN: IC_RAIN,
  FOGGY: IC_FOGGY,
};
// export const ICON_MENU = menu;
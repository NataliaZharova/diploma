import {
  RESOLUTION_TABLET,
  RESOLUTION_DESKTOP,
} from "../constants/screen-resolution";
import {
  DEVICE_MOBILE,
  DEVICE_TABLET,
  DEVICE_DESKTOP
} from "../constants/device";

export function detectDevice() {
  const w = window.innerWidth;
  if (w < RESOLUTION_TABLET) {
    return DEVICE_MOBILE;
  } else if (w < RESOLUTION_DESKTOP) {
    return DEVICE_TABLET;
  } else {
    return DEVICE_DESKTOP;
  }
}

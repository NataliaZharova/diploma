import Swiper from "swiper";
import { detectDevice } from "./util";
import { DEVICE_MOBILE, DEVICE_TABLET, DEVICE_DESKTOP } from "./constants";

import "normalize.css";
import "./pages/about.css";

const slidesOffsetMap = {
  [DEVICE_MOBILE]: 16,
  [DEVICE_TABLET]: 40,
  [DEVICE_DESKTOP]: 104
};

const spaceBetweenMap = {
  [DEVICE_MOBILE]: 8,
  [DEVICE_TABLET]: 8,
  [DEVICE_DESKTOP]: 16
};

const device = detectDevice();
const slidesOffset = slidesOffsetMap[device];
const spaceBetween = spaceBetweenMap[device];

new Swiper(".swiper-container", {
  slidesPerView: "auto",
  watchOverflow: true,
  spaceBetween: spaceBetween,
  slidesOffsetBefore: slidesOffset,
  slidesOffsetAfter: slidesOffset,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

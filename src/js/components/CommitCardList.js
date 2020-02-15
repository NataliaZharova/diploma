import Swiper from "swiper";
import { detectDevice } from "../utils/detect-device";
import {
  DEVICE_MOBILE,
  DEVICE_TABLET,
  DEVICE_DESKTOP
} from "../constants/device";

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

export class CommitCardList {
  constructor() {
    const device = detectDevice();
    const slidesOffset = slidesOffsetMap[device];
    const spaceBetween = spaceBetweenMap[device];
    this._swiper = new Swiper(".swiper-container", {
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
    this._el = document.querySelector(".carousel");
    this._listEl = this._el.querySelector(".carousel__list");
  }

  populate(commits) {
    const page = commits.map(o => o.getElement());
    this._listEl.innerHTML = "";
    this._listEl.append(...page);
    this._swiper.update();
  }
}

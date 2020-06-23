import MainClass from "./MainClass";
import {API} from "../assets/API"

export default class HandlerApi extends MainClass {
  constructor() {
    super();
    this.template = this.$.querySelector("[data-template=coupon]");
    this.apiParse();
  }

  apiParse() {
    for (let i = 0; i < API.length; i++) {
      this.renderCoupon(API[i]);
    }
  }

  renderCoupon(item) {
    let templateClone = this.template.cloneNode(true);
    templateClone.removeAttribute('data-template', '');
    templateClone.querySelector(".coupon-text__title").textContent = item.title
    templateClone.querySelector(".coupon-text__description").textContent = item.description
    templateClone.querySelector(".coupon-text__code").textContent = item.code
    templateClone.querySelector(".coupon-text__code-type").textContent = item.typeCode
    templateClone.querySelector(".coupon__image").src = require("../assets/images/" + item.image).default;
    templateClone.setAttribute('data-name', item.id);
    this.$.getElementById("coupon-list").appendChild(templateClone);
  }
}
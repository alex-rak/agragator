import MainClass from "./MainClass";

export default class Agregator extends MainClass {
  constructor () {
    super();
    this.sideBar = this.$.getElementById("sidebar");
    this.addEventTouchSideBar();
    this.addEventForItemsSideBar();
    this.addEventClickSideBar();
  }

  /**
   * Вешаем событие клика на ярлычок SideBar
   */
  addEventClickSideBar() {
    let button = this.$.getElementById("side-button");
    button.addEventListener("click", () => {
      if (this.sideBar.className.includes("visible")) {
        this.sideBar.classList.remove("visible");
      } else {
        this.sideBar.classList.add("visible");
      }
    })
  }

  /**
   * Вешаем событие touch чтобы можно вытягивать пальцем SideBar
   */
  addEventTouchSideBar() {
    let event;
    this.sideBar.addEventListener("touchstart", (e) => {
      event = e;
    })
    this.sideBar.addEventListener("touchmove", (e) => {
      if (event) {
        const isVisible = this.sideBar.className.includes("visible")
        if (e.touches[0].pageX - event.touches[0].pageX > 5 && !isVisible) {
          this.sideBar.classList.add("visible");
        } else if (e.touches[0].pageX - event.touches[0].pageX < 5 && isVisible) {
          this.sideBar.classList.remove("visible");
        }
        event = undefined
      }
    })
    this.sideBar.addEventListener("touchend", function () {
        event = undefined;
    });
  }

  /**
   * Вешаем события на элементы списка SideBar
   */
  addEventForItemsSideBar() {
    let length = this.$.getElementsByClassName("sidebar__item").length
    for (let i = 0; i < length; i++) {
      let item = this.$.getElementsByClassName("sidebar__item")[i];
      item.addEventListener("click", (e) => {
        for (let i = 0; i < length; i++) {
          this.$.getElementsByClassName("sidebar__item")[i].classList.remove("active");
        }
        e.currentTarget.classList.add("active")
      })
    }
  }

  setColorSvg() {

  }

  /**
   * Меняем кнопку открытия и скрытия SideBar
   * @param {Boolean} open открываем или скрываем SideBar
   */
  setButtonSideBar(open) {
    const iconName = open ? "menu-close.svg" : "menu-burger.svg"
    this.$.getElementById("side-button").src  = require("../assets/icons/" + iconName).default
  }
}
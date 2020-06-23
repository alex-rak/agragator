import '../style/style.scss';
import SideBar from "./SideBar";
import MainClass from './MainClass';
import HandlerApi from './HandlerApi';

class Agregator extends MainClass {
  constructor () {
    super();
    this.setScrollingSearch();
    new SideBar();
    new HandlerApi();
  }

  /**
   * Устанавливаем прослушку скролла для фиксации элемента Search
   */
  setScrollingSearch () {
    const search = this.$.getElementById("search");
    const pageBody = this.$.getElementsByClassName("page__body")[0];
    this._.addEventListener("scroll", () => {
      if (this._.scrollY > 30) {
        search.classList.add("scroll-active");
        pageBody.style.paddingTop = search.clientHeight + "px";
      } else {
        search.classList.remove("scroll-active");
        pageBody.style.paddingTop = 0;
      }
    })
  }
}

new Agregator()

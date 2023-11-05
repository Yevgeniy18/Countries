import CountryItemDetailed from "../components/CountryItemDetailed";
export default class Display {
  constructor() {
    this.resultWrapper = document.getElementById("results");
  }
  // Mobile rendering
  renderMobile(element, data) {
    let detailedMobile = document.createElement("div");
    detailedMobile.classList.add("detailed__mobile");

    if (element.querySelector(".detailed__mobile")) {
      element.removeChild(element.querySelector(".detailed__mobile"));
    } else {
      let test = new CountryItemDetailed(data).renderMobile(detailedMobile);
      element.append(test);
    }
  }
  // Desktop rendering
  renderDesktop(data) {
    return new CountryItemDetailed(data).renderDesktop();
  }
}

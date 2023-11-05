import Display from "../helper/Display";
import CountryItem from "../components/CountryItem";
import Helpers from "../helper";

export default class CountriesList {
  constructor(filtereData) {
    this.data = filtereData;
    this.helper = new Helpers();
    this.listContainer = document.querySelector(".results__wrapper__list");
    this.listContainerBox = document.querySelector(
      ".results__wrapper__list__container",
    );
    this.detailsContainer = document.querySelector(
      ".results__wrapper__details",
    );
    this.wrapper = document.querySelector(".results__wrapper");
  }

  render() {
    // Clearing the initial containers before rendering results
    this.listContainerBox.innerHTML = "";
    this.detailsContainer.style.display = "none";
    this.detailsContainer.innerHTML = "";    
    (function () {
        window.onresize = getScreenSize;
        window.onload = getScreenSize;

        function getScreenSize() {
          let width = window.innerWidth;
          if (width < 560) {
            if (document.querySelector(".results__wrapper__details")) {
              document.querySelector(
                ".results__wrapper__details",
              ).style.display = "none";
            }
          }
        }
      },
    )();

    if (this.data && this.data.length) {
      console.log(this.data)
      this.data.forEach((country) => {
        let countryItem = new CountryItem(country);
        let countryCard = countryItem.render();
        this.listContainerBox.appendChild(countryCard);

        // Rendering country detail view upon click
        countryCard.addEventListener("click", (e) => {
          let selected = document.querySelectorAll(".active");
          selected.forEach((elt) => {
            elt.classList.remove("active");
          });
          e.currentTarget.classList.add("active");

          if (window.innerWidth < 560) {
            new Display().renderMobile(e.currentTarget, country, this.index++);
            this.detailsContainer.style.display = "none";
          } else {
            new Display().renderDesktop(country);
            this.detailsContainer.style.display = "flex";
          }
        });
      });
    }
  }

  notFoundError(){

    this.listContainerBox.innerHTML = "<h2>Oopsie, nothing found, give it another shot !</h2>"

  }
}

import CountryItemDetailed from "../components/CountryItemDetailed";
import CountryItem from "../components/CountryItem";
import Helpers from "../helper";

export default class CountriesList {
  constructor(filtereData) {
    this.data = filtereData;
    this.helper = new Helpers();
    this.open = false;
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

    if (this.data && this.data.length) {
      this.data.forEach((country) => {
        let countryItem = new CountryItem(country);
        let countryCard = countryItem.render();
        this.listContainerBox.appendChild(countryCard);

        // Rendering country detail view upon click
        countryCard.addEventListener("click", (e) => {
          let index = 0;

          // if (this.open) {
          //   this.open = false;
          //   this.detailsContainer.style.display = "none";
          //   this.detailsContainer.innerHTML = "";
          // } else {
          //   this.open = true;
          //   this.detailsContainer.style.display = "flex";
          // }

          let selected = document.querySelectorAll(".active");

          selected.forEach((elt) => {
            elt.classList.remove("active");
          });
          e.currentTarget.classList.add("active");

          this.detailsContainer.style.display = "flex";
          new CountryItemDetailed(country).render();
        });
      });
    }
  }
}

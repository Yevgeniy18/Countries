import CountryItemDetailed from "../components/CountryItemDetailed";
import CountryItem from "../components/CountryItem";
import Helpers from "../helper";

export default class CountriesList {
  constructor(filtereData) {
    this.data = filtereData;
    this.helper = new Helpers();
    this.listContainer = document.querySelector(".results__wrapper__list");
    this.detailsContainer = document.querySelector(
      ".results__wrapper__details"
    );
    this.wrapper = document.querySelector(".results__wrapper");
  }

  render() {
    this.listContainer.innerHTML = "";
    this.detailsContainer.style.display = "none";
    this.detailsContainer.innerHTML = "";

    if (this.data && this.data.length) {
      this.data.forEach((country) => {
        let countryItem = new CountryItem(country);
        let countryCard = countryItem.render();
        this.listContainer.appendChild(countryCard);

        countryCard.addEventListener("click", () => {
          this.detailsContainer.style.display = "flex";
          new CountryItemDetailed(country).render();
        });
      });
    }
  }
}
